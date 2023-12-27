
export async function  GET(req,params) {
  console.log("first", req)
  const {
    brand,
    condition,
    size,
    price,
    status,
    title,
    sort,
    page = 1,
    perPage = 10,
    search,
  } = req.query;

  const filters = {};

  if (brand) filters.brand = { $in: brand.split(",") }; // Assuming brand is a comma-separated string
  if (condition) filters.condition = condition;
  if (size) filters.size = { $in: size.split(",") }; // Assuming size is a comma-separated string
  if (price) filters.price = { $lte: parseFloat(price) };
  if (status) filters.status = status;
  if (title) filters.title = { $regex: title, $options: "i" };

  if (search) {
    filters.$or = [
      { title: { $regex: `.*${search}.*`, $options: "i" } },
      { brand: { $regex: `.*${search}.*`, $options: "i" } },
    ];
  }

  const skip = (page - 1) * perPage;

  const sortOptions = {};
  if (sort === "price_high") {
    sortOptions.price = -1;
  } else if (sort === "price_low") {
    sortOptions.price = 1;
  }

  const filteredProducts = await Products_Schema.find(filters)
    .skip(skip)
    .limit(parseInt(perPage))
    .sort(sortOptions)
    .exec();

  res.status(200).json({
    message: "Filtered Products Successfully!",
    filteredProducts: filteredProducts,
    currentPage: page,
    totalPages: Math.ceil(filteredProducts.length / perPage),
  });
};
