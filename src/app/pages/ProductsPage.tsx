import {
  Package,
  Plus,
  Search,
  TrendingUp,
  RefreshCw,
  Calendar,
  X,
} from "lucide-react";
import { useCurrentColors } from "../contexts/ThemeColorsContext";
import { useState, useMemo, useEffect } from "react";
import { ProductsTableWithFilters } from "../components/ProductsTableWithFilters";
import { ColumnConfig } from "../components/ColumnCustomizer";
import { ThemedButton } from "../components/ThemedButton";
import { ReportDownload, ReportSection } from "../components/ReportDownload";

interface Product {
  id: string;
  name: string;
  code: string;
  category: string;
  warehouse: string;
  price: string;
  sales: string;
}

// Map category numbers to names
const getCategoryName = (categoryNumber: number): string => {
  const categoryMap: Record<number, string> = {
    1: "فرش",
    2: "موکت",
    3: "تابلو فرش",
    4: "سایر",
  };
  return categoryMap[categoryNumber] || "نامشخص";
};

export function ProductsPage() {
  const colors = useCurrentColors();
  const [searchQuery, setSearchQuery] = useState("");
  const [customColumns, setCustomColumns] = useState<ColumnConfig[]>([
    { key: "name", label: "نام محصول", visible: true },
    { key: "code", label: "کد تولید", visible: true },
    { key: "category", label: "دسته بندی", visible: true },
    { key: "warehouse", label: "انبار", visible: true },
    { key: "price", label: "قیمت صرفه تخته فروش(تومان)", visible: true },
    { key: "sales", label: "فروش (کل تومان)", visible: true },
  ]);

  // API state
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [selectedProductType, setSelectedProductType] = useState<string>("Carpet");
  const [totalCount, setTotalCount] = useState(0);

  // Pagination state (managed by parent)
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Product type options
  const productTypeOptions = [
    { value: "None", label: "همه" },
    { value: "Carpet", label: "فرش" },
    { value: "RawMaterials", label: "مواد خام" },
    { value: "Rug", label: "گلیم" },
  ];

  // Fetch products directly from the API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const body: any = {
          paggination: {
            pageNumber: 1,
            pageSize: 1000, // you can increase this if the backend allows
          },
        };

        // For "همه" we omit categoryDto so we get all products
        if (selectedProductType !== "None") {
          body.categoryDto = {
            productCategory: selectedProductType,
          };
        }

        const response = await fetch(
          "https://panel.bineshafzar.ir/api/ProductApi/GetProducts",
          {
            method: "POST",
            headers: {
              accept:
                "application/json;odata.metadata=minimal;odata.streaming=true",
              "Content-Type":
                "application/json;odata.metadata=minimal;odata.streaming=true",
            },
            body: JSON.stringify(body),
          }
        );

        const data = await response.json();

        if (data.code === 200 && data.status === "success") {
          const mappedProducts: Product[] = data.body.items.map((item: any) => ({
            id: item.productId,
            name: item.productName,
            code: item.detailedType,
            category: getCategoryName(item.category),
            warehouse: getCategoryName(item.category),
            price: item.priceUnit.toLocaleString("fa-IR"),
            sales: item.totalSale.toLocaleString("fa-IR"),
          }));

          setAllProducts(mappedProducts);
          setTotalCount(data.body.totalCount || 0);
        } else {
          console.warn("API returned non-success response:", data);
          setAllProducts([]);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        // Fallback mock data
        setAllProducts([
          {
            id: "1",
            name: "فرش ۴۰۰*۳ شانه تراکم ۱۶۰۰ پرستیژ برجسته درجه ۱",
            code: "+۲۶۰",
            category: "فرش",
            warehouse: "فرش",
            price: "۲۵,۰۰۰,۰۰۰",
            sales: "۲,۴۰۰,۰۰۰,۰۰۰",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedProductType]);

  const handlePageChange = (newPage: number) => setCurrentPage(newPage);

  const handleRowsPerPageChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
  };

  const stats = [
    {
      icon: Package,
      label: "کل محصولات",
      value: loading ? "..." : totalCount.toLocaleString("fa-IR"),
      unit: "عدد",
      growth: "رشد نسبت به سال قبل: ٪۵۰+",
      color: colors.primary,
    },
    {
      icon: RefreshCw,
      label: "نرخ گردش موجودی",
      value: "۲",
      unit: "بار",
      growth: "رشد نسبت به سال قبل: ٪۵۰+",
      color: colors.success,
    },
    {
      icon: Calendar,
      label: "روزهای گردش موجودی",
      value: "۱۸۰",
      unit: "روز",
      growth: "رشد نسبت به سال قبل: ٪۵۰+",
      color: colors.warning,
    },
  ];

  // Filter products based on search (client-side)
  const filteredProducts = useMemo(() => {
    return allProducts.filter(
      (product) =>
        product.name.includes(searchQuery) ||
        product.code.includes(searchQuery) ||
        product.category.includes(searchQuery) ||
        product.warehouse.includes(searchQuery)
    );
  }, [searchQuery, allProducts]);

  const handleEdit = (productId: string) => console.log("Edit product:", productId);
  const handleDelete = (productId: string) => console.log("Delete product:", productId);

  // Report sections
  const visibleProductColumns = customColumns.filter((col) => col.visible);

  const reportSections: ReportSection[] = [
    {
      title: "آمار کلی محصولات",
      data: [
        { شاخص: "کل محصولات", مقدار: "6000", تغییرات: "+50%" },
        { شاخص: "نرخ گردش موجودی", مقدار: "2", تغییرات: "+50%" },
        { شاخص: "روزهای گردش موجودی", مقدار: "180", تغییرات: "+50%" },
      ],
      headers: ["شاخص", "مقدار", "تغییرات"],
    },
    {
      title: "لیست محصولات",
      data: filteredProducts.map((p) => {
        const row: Record<string, any> = {};
        visibleProductColumns.forEach((col) => {
          const label = col.customLabel || col.label;
          switch (col.key) {
            case "name":
              row[label] = p.name;
              break;
            case "code":
              row[label] = p.code;
              break;
            case "category":
              row[label] = p.category;
              break;
            case "warehouse":
              row[label] = p.warehouse;
              break;
            case "price":
              row[label] = p.price;
              break;
            case "sales":
              row[label] = p.sales;
              break;
            default:
              if (col.isCustom) row[label] = "-";
          }
        });
        return row;
      }),
      headers: visibleProductColumns.map((col) => col.customLabel || col.label),
    },
  ];

  return (
    <div className="space-y-6" dir="rtl">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold" style={{ color: colors.textPrimary }}>
            مدیریت محصولات
          </h1>
          <p className="text-xs sm:text-sm" style={{ color: colors.textSecondary }}>
            فهرست و مدیریت محصولات
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <ReportDownload sections={reportSections} fileName="گزارش-محصولات" />
          <ThemedButton
            onClick={() => console.log("Add product")}
            className="flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-lg flex-1 sm:flex-initial"
            icon={<Plus className="w-4 h-4 sm:w-5 sm:h-5" />}
          >
            افزودن محصول جدید
          </ThemedButton>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="rounded-xl p-6 border"
              style={{
                backgroundColor: colors.cardBackground,
                borderColor: colors.border,
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs mb-2" style={{ color: colors.textSecondary }}>
                    {stat.label}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-bold" style={{ color: colors.textPrimary }}>
                      {stat.value}
                    </p>
                    <span className="text-sm" style={{ color: colors.textSecondary }}>
                      {stat.unit}
                    </span>
                  </div>
                </div>
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}22` }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs" style={{ color: colors.success }}>
                <TrendingUp className="w-3 h-3" />
                <span>{stat.growth}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Products Table */}
      <ProductsTableWithFilters
        products={filteredProducts}
        customColumns={customColumns}
        setCustomColumns={setCustomColumns}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        currentPage={currentPage}
        rowsPerPage={pageSize}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        loading={loading}
        selectedProductType={selectedProductType}
        onProductTypeChange={setSelectedProductType}
        productTypeOptions={productTypeOptions}
      />
    </div>
  );
}