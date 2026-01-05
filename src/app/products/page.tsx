"use client";
import React, { useEffect, useMemo, useState, lazy, Suspense } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import {
	grayCastIronProducts,
	High_Manganese_Steel,
	Steel_Casting,
	Alloy_Steel,
	Rolling_Mill_Casting,
	Machine_Workshop,
} from "../../Data/index";
import Navbar from "@/components/Navbar";
import { FaArrowUp } from "react-icons/fa";

// Lazy load heavy components
const Footer = lazy(() => import("@/components/Footer"));
const QuotationModal = lazy(() => import("@/components/QuotationModal"));

function ProductContent() {
	const [showScrollTop, setShowScrollTop] = useState(false);
	const categories = [
		{ id: "gray-cast-iron", name: "Gray Cast Iron Products", data: grayCastIronProducts },
		{ id: "high-manganese", name: "High Manganese Steel", data: High_Manganese_Steel },
		{ id: "steel-casting", name: "Steel Casting", data: Steel_Casting },
		{ id: "alloy-steel", name: "Alloy Steel", data: Alloy_Steel },
		{ id: "rolling-mill", name: "Rolling Mill Casting", data: Rolling_Mill_Casting },
		{ id: "machine-workshop", name: "Machine Workshop", data: Machine_Workshop },
	];

	const searchParams = useSearchParams();
	const router = useRouter();

	const [activeCategory, setActiveCategory] = useState("all");
	const [searchTerm, setSearchTerm] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<{
		name: string;
		category: string;
	} | null>(null);

	// Flatten products
	const allProducts = useMemo(() => {
		return categories.flatMap((c) => c.data.map((p) => ({ ...p, category: c.name, categoryId: c.id })));
	}, [categories]);

	// JSON-LD Schema for SEO
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		"name": "Industrial Casting Products Catalog",
		"description": "Comprehensive range of steel casting products including Gray Cast Iron, High Manganese Steel, Alloy Steel, Rolling Mill Castings, and Machine Workshop components.",
		"url": "https://www.aarceecasting.com/products",
		"provider": {
			"@type": "Organization",
			"name": "Aarcee Casting Industries",
			"url": "https://www.aarceecasting.com"
		},
		"itemListElement": allProducts.map((product, index) => ({
			"@type": "Product",
			"position": index + 1,
			"name": product.name,
			"description": product.description,
			"image": `https://www.aarceecasting.com${product.image}`,
			"category": product.category,
			"offers": {
				"@type": "Offer",
				"availability": "https://schema.org/InStock",
				"priceCurrency": "INR"
			}
		}))
	};

	// sync from URL
	useEffect(() => {
		const q = searchParams?.get("category") ?? "all";
		if (q) setActiveCategory(q);
	}, [searchParams]);

	// Scroll to top button logic
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setShowScrollTop(true);
			} else {
				setShowScrollTop(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const filtered = useMemo(() => {
		let list = allProducts;
		if (activeCategory && activeCategory !== "all") list = list.filter((p) => p.categoryId === activeCategory);
		if (searchTerm.trim()) {
			const t = searchTerm.toLowerCase();
			list = list.filter((p) => p.name.toLowerCase().includes(t) || p.description.toLowerCase().includes(t));
		}
		return list;
	}, [allProducts, activeCategory, searchTerm]);

	// helper to change category and update URL
	const goToCategory = (id: string) => {
		setActiveCategory(id);
		const params = new URLSearchParams(Array.from(searchParams!.entries()));
		if (id === "all") params.delete("category"); else params.set("category", id);
		router.push(`/products?${params.toString()}`);
	};

	// Open quotation modal
	const openQuotationModal = (productName: string, category: string) => {
		setSelectedProduct({ name: productName, category });
		setIsModalOpen(true);
	};

	// Close quotation modal
	const closeQuotationModal = () => {
		setIsModalOpen(false);
		setSelectedProduct(null);
	};

	// Scroll to top function
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			{/* JSON-LD Schema for SEO */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			
			<Navbar />
			<div className="min-h-screen bg-gradient-to-br from-[#F8EEDF] via-white to-[#F8EEDF] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<header className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-3 sm:mb-4">
						Our <span className="text-[#8E1616]">Products</span>
					</h1>
					<p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4">
						Explore our range of industrial castings and precision-engineered components.
					</p>
				</header>

				{/* category chips */}
				<div className="mb-6 sm:mb-8 md:mb-10 flex flex-wrap gap-2 sm:gap-3 justify-center">
					<button 
						onClick={() => goToCategory("all")} 
						className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
							activeCategory === "all" 
								? "bg-gradient-to-r from-[#8E1616] to-[#E8C999] text-white shadow-lg" 
								: "bg-white text-gray-700 border border-[#E8C999] hover:border-[#8E1616]"
						}`}
					>
						All
					</button>
					{categories.map((c) => (
						<button 
							key={c.id} 
							onClick={() => goToCategory(c.id)} 
							className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
								activeCategory === c.id 
									? "bg-gradient-to-r from-[#8E1616] to-[#E8C999] text-white shadow-lg" 
									: "bg-white text-gray-700 border border-[#E8C999] hover:border-[#8E1616]"
							}`}
						>
							{c.name}
						</button>
					))}
				</div>

				{/* filters */}
				<div className="mb-6 sm:mb-8 md:mb-10 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
					<div className="md:col-span-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
						<input 
							value={searchTerm} 
							onChange={(e) => setSearchTerm(e.target.value)} 
							placeholder="Search products by name or description..." 
							className="flex-1 border border-[#E8C999] rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-[#8E1616] focus:ring-2 focus:ring-[#8E1616]/20 transition-all bg-white" 
						/>
						<button 
							onClick={() => setSearchTerm("")} 
							className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border border-[#E8C999] rounded-lg hover:bg-[#E8C999]/10 transition-colors font-medium"
						>
							Clear
						</button>
					</div>

					<div>
						<select 
							value={activeCategory} 
							onChange={(e) => goToCategory(e.target.value)} 
							className="w-full border border-[#E8C999] rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-[#8E1616] focus:ring-2 focus:ring-[#8E1616]/20 transition-all bg-white"
						>
							<option value="all">All Categories</option>
							{categories.map((c) => (
								<option key={c.id} value={c.id}>{c.name}</option>
							))}
						</select>
					</div>
				</div>

				{/* products grid */}
				<section aria-label="Products catalog">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
						{filtered.map((p, idx) => (
							<article 
								key={`${p.categoryId}-${idx}`} 
								className="bg-white border border-[#E8C999] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
								itemScope 
								itemType="https://schema.org/Product"
							>
								<div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden">
									<Image 
										src={p.image} 
										alt={p.alt || `${p.name} - ${p.description}`} 
										fill 
										className="object-cover transition-transform duration-300 group-hover:scale-110"
										sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
										loading="lazy"
										quality={85}
										itemProp="image"
										placeholder="blur"
										blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
									/>
								</div>
								<div className="p-4 sm:p-5 md:p-6">
									<h3 className="font-bold text-base sm:text-lg md:text-xl text-black mb-2 sm:mb-3 line-clamp-2" itemProp="name">
										{p.name}
									</h3>
									<p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 line-clamp-3" itemProp="description">
										{p.description}
									</p>
									<div className="pt-2 sm:pt-3 border-t border-[#E8C999] space-y-2 sm:space-y-3">
										<div className="flex items-center justify-between">
											<span className="text-xs sm:text-sm text-[#8E1616] font-semibold bg-[#E8C999]/20 px-2 sm:px-3 py-1 rounded-full" itemProp="category">
												{p.category}
											</span>
										</div>
										<button
											onClick={() => openQuotationModal(p.name, p.category)}
											className="w-full bg-gradient-to-r from-[#8E1616] to-[#B91C1C] text-white font-bold px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg hover:from-[#B91C1C] hover:to-[#8E1616] transform hover:scale-105 transition-all duration-300 shadow-lg"
											aria-label={`Request quotation for ${p.name}`}
										>
											Request Quotation
										</button>
									</div>
								</div>
							</article>
						))}
					</div>
				</section>

				{filtered.length === 0 && (
					<div className="text-center py-20 md:py-24">
						<div className="text-gray-400 text-6xl mb-4">🔍</div>
						<h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">No products found</h3>
						<p className="text-gray-600">Try adjusting your search or filter criteria.</p>
					</div>
				)}
			</div>
		
		</div>
		<Suspense fallback={null}>
			<Footer />
		</Suspense>

		{/* Quotation Modal */}
		{selectedProduct && (
			<Suspense fallback={null}>
				<QuotationModal
					isOpen={isModalOpen}
					onClose={closeQuotationModal}
					productName={selectedProduct.name}
					productCategory={selectedProduct.category}
				/>
			</Suspense>
		)}

		{/* Scroll to Top Button - Mobile Only */}
		{showScrollTop && (
			<button
				onClick={scrollToTop}
				className="block md:hidden fixed bottom-8 right-6 z-[9999] bg-gradient-to-r from-[#8E1616] to-[#B91C1C] text-white p-4 rounded-full shadow-2xl hover:from-[#B91C1C] hover:to-[#8E1616] transition-all duration-300"
				aria-label="Scroll to top"
			>
				<FaArrowUp className="text-xl" />
			</button>
		)}
		</>
	);
}

export default function ProductPage() {
	return (
		<Suspense fallback={
			<div className="min-h-screen flex items-center justify-center">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8E1616]"></div>
			</div>
		}>
			<ProductContent />
		</Suspense>
	);
}
