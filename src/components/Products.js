import React, { useState, useEffect, useMemo } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "../styles/products.css";

const Products = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [showSortOptions, setShowSortOptions] = useState(false); //handle recommended dropdown
    const [products, setProducts] = useState([]); // Original list of all products
    const [filteredProducts, setFilteredProducts] = useState([]); // List of products after applying filters
    const [loading, setLoading] = useState(true); // Tracks if products are being loaded

    // Tracks filter selections for various categories
    const [filters, setFilters] = useState({
        customizable: false,
        idealFor: [],
        occasion: [],
        work: [],
        fabric: [],
        segment: [],
        suitableFor: [],
        rawMaterials: [],
        pattern: [],
    });

    // Predefined filter options (static data)
    const filterOptions = useMemo(() => ({
        idealFor: ["Men", "Women", "Kids"],
        occasion: ["Casual", "Formal"],
        work: ["Embroidery", "Printing", "Plain"],
        fabric: ["Cotton", "Silk", "Synthetic"],
        suitableFor: ["Summer", "Winter"],
        rawMaterials: ["Natural", "Synthetic"],
        pattern: ["Solid", "Striped", "Floral"],
    }), []);

    // Fetches product data from an API and adds filter properties to each product
    useEffect(() => {
        setLoading(true);
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                // Fetch products from the API and add additional properties for filtering
                const updatedProducts = data.map((product, index) => ({
                    ...product,
                    idealFor: filterOptions.idealFor[index % filterOptions.idealFor.length],  //Assign a value from the "Ideal For" options, repeat options through them using the product index  
                    occasion: filterOptions.occasion[index % filterOptions.occasion.length],
                    work: filterOptions.work[index % filterOptions.work.length],
                    fabric: filterOptions.fabric[index % filterOptions.fabric.length],
                    suitableFor: filterOptions.suitableFor[index % filterOptions.suitableFor.length],
                    rawMaterials: filterOptions.rawMaterials[index % filterOptions.rawMaterials.length],
                    pattern: filterOptions.pattern[index % filterOptions.pattern.length],
                }));
                setProducts(updatedProducts); // Save original products
                setFilteredProducts(updatedProducts); // add filtered products
                setLoading(false); // Stop loading spinner
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, [filterOptions]);

    // Filters the products based on the selected options
    useEffect(() => {
        const applyFilters = () => {
            let filtered = [...products]; // Start with all products

            // Filter by "customizable" if selected
            if (filters.customizable) {
                filtered = filtered.filter((product) => product.customizable);
            }

            // Apply selected options for each filter category
            Object.keys(filters).forEach((key) => {
                if (Array.isArray(filters[key]) && filters[key].length > 0) {
                    filtered = filtered.filter((product) =>
                        filters[key].some((option) => 
                            product[key]?.toLowerCase().includes(option.toLowerCase())
                        )
                    );
                }
            });

            setFilteredProducts(filtered); // Update filtered product list
        };

        applyFilters();
    }, [filters, products]);

    // Toggles the visibility of the filter section
    const toggleFilterSection = () => setShowFilters(!showFilters);

    // Toggles the visibility of the sort dropdown
    const toggleSortOptions = () => setShowSortOptions(!showSortOptions);

    // Updates the selected filter options for a given category
    const handleFilterChange = (key, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [key]: prevFilters[key].includes(value)
                ? prevFilters[key].filter((item) => item !== value) // Remove if already selected
                : [...prevFilters[key], value], // Add if not selected
        }));
    };

    // Clears all selected options for a given filter category
    const handleUnselectAll = (key) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [key]: [], // Reset the selected options to an empty array
        }));
    };

    return (
        <div className="products-container">
            {/* Header Section */}
            <div className="products-header">
                <h1>DISCOVER OUR PRODUCTS</h1>
                <p>See our unique and exceptional products and categorize them your way.</p>
                <hr className="hr-line" />
                <div className="products-controls">
                    <span>{filteredProducts.length} ITEMS</span>
                    <button onClick={toggleFilterSection}>
                        {showFilters ? "Hide Filters" : "Show Filters"}
                    </button>
                    <div className="sort-section">
                        <button onClick={toggleSortOptions}>
                            Recommended {showSortOptions ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>
                        {showSortOptions && (
                            <ul className="sort-options">
                                <li onClick={() => setFilteredProducts([...products])}>Recommended</li>
                                <li onClick={() => setFilteredProducts([...products].reverse())}>Newest First</li>
                                <li onClick={() => setFilteredProducts([...products])}>Popular</li>
                                <li onClick={() => setFilteredProducts([...products].sort((a, b) => b.price - a.price))}>
                                    Price: High to Low
                                </li>
                                <li onClick={() => setFilteredProducts([...products].sort((a, b) => a.price - b.price))}>
                                    Price: Low to High
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
                <hr className="hr-line" />
            </div>

            {/* Content Section */}
            <div className="products-content">
                {showFilters && (
                    <div className="filters-bar">
                        <h2>Filters</h2>
                        {/* Customizable Checkbox */}
                        <div className="filter-group">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={filters.customizable}
                                    onChange={(e) => setFilters({ ...filters, customizable: e.target.checked })}
                                />
                                Customizable
                            </label>
                        </div>
                        <hr />

                        {/* Dynamic Filter Options */}
                        {Object.keys(filterOptions).map((filterKey) => (
                            <div key={filterKey} className="filter-group">
                                <h3>{filterKey.toUpperCase()}</h3>
                                <button onClick={() => handleUnselectAll(filterKey)}>Unselect All</button>
                                <ul>
                                    {filterOptions[filterKey].map((option) => (
                                        <li key={option}>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={filters[filterKey].includes(option)}
                                                    onChange={() => handleFilterChange(filterKey, option)}
                                                />
                                                {option}
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                {/* Products Section */}
                <div className="products-list">
                    {loading ? (
                        <div className="loader">Loading...</div>
                    ) : (
                        filteredProducts.map((product) => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p>{product.category}</p>
                                <p>${product.price}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
