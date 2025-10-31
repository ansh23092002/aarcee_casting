"use client";
import React, { useEffect, useMemo, useState } from "react";
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
import Footer from "@/components/Footer";
import QuotationModal from "@/components/QuotationModal";
import { FaArrowUp } from "react-icons/fa";

const ProductPage = () => {
	const [showScrollTop, setShowScrollTop] = useState(false);
	const categories = [
		{ id: "gray-cast-iron", name: "Gray Cast Iron Products Casting", data: grayCastIronProducts },
		{ id: "high-manganese", name: "High Manganese Steel Casting ", data: High_Manganese_Steel },
		{ id: "steel-casting", name: "Steel Casting Casting ", data: Steel_Casting },
		{ id: "alloy-steel", name: "Alloy Steel Casting ", data: Alloy_Steel },
		{ id: "rolling-mill", name: "Rolling Mill Casting", data: Rolling_Mill_Casting },
		{ id: "machine-workshop", name: "Machine Workshop Casting ", data: Machine_Workshop },
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

	// Flatten products
	const allProducts = useMemo(() => {
		return categories.flatMap((c) => c.data.map((p) => ({ ...p, category: c.name, categoryId: c.id })));
	}, [categories]);

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
			<Navbar />
			<div className="min-h-screen bg-gradient-to-br from-[#F8EEDF] via-white to-[#F8EEDF] py-20 md:py-24 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<header className="text-center mb-12 md:mb-16">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-4">
						Our <span className="text-[#8E1616]">Products</span>
					</h1>
					<p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
						Explore our range of industrial castings and precision-engineered components.
					</p>
				</header>

				{/* category chips */}
				<div className="mb-10 flex flex-wrap gap-3 justify-center">
					<button 
						onClick={() => goToCategory("all")} 
						className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
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
							className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
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
				<div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="md:col-span-2 flex gap-4">
						<input 
							value={searchTerm} 
							onChange={(e) => setSearchTerm(e.target.value)} 
							placeholder="Search products by name or description..." 
							className="flex-1 border border-[#E8C999] rounded-lg px-4 py-3 focus:outline-none focus:border-[#8E1616] focus:ring-2 focus:ring-[#8E1616]/20 transition-all bg-white" 
						/>
						<button 
							onClick={() => setSearchTerm("")} 
							className="px-6 py-3 border border-[#E8C999] rounded-lg hover:bg-[#E8C999]/10 transition-colors font-medium"
						>
							Clear
						</button>
					</div>

					<div>
						<select 
							value={activeCategory} 
							onChange={(e) => goToCategory(e.target.value)} 
							className="w-full border border-[#E8C999] rounded-lg px-4 py-3 focus:outline-none focus:border-[#8E1616] focus:ring-2 focus:ring-[#8E1616]/20 transition-all bg-white"
						>
							<option value="all">All Categories</option>
							{categories.map((c) => (
								<option key={c.id} value={c.id}>{c.name}</option>
							))}
						</select>
					</div>
				</div>

				{/* products grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{filtered.map((p, idx) => (
						<article 
							key={`${p.categoryId}-${idx}`} 
							className="bg-white border border-[#E8C999] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
						>
							<div className="relative h-56 md:h-64 w-full overflow-hidden">
								<Image 
									src={p.image} 
									alt={p.name} 
									fill 
									className="object-cover transition-transform duration-300 group-hover:scale-110" 
								/>
							</div>
							<div className="p-5 md:p-6">
								<h3 className="font-bold text-lg md:text-xl text-black mb-3 line-clamp-2">
									{p.name}
								</h3>
								<p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
									{p.description}
								</p>
								<div className="pt-3 border-t border-[#E8C999] space-y-3">
									<div className="flex items-center justify-between">
										<span className="text-xs md:text-sm text-[#8E1616] font-semibold bg-[#E8C999]/20 px-3 py-1 rounded-full">
											{p.category}
										</span>
									</div>
									<button
										onClick={() => openQuotationModal(p.name, p.category)}
										className="w-full bg-gradient-to-r from-[#8E1616] to-[#B91C1C] text-white font-bold px-4 py-2.5 rounded-lg hover:from-[#B91C1C] hover:to-[#8E1616] transform hover:scale-105 transition-all duration-300 shadow-lg"
									>
										Request Quotation
									</button>
								</div>
							</div>
						</article>
					))}
				</div>

				{filtered.length === 0 && (
					<div className="text-center py-20 md:py-24">
						<div className="text-gray-400 text-6xl mb-4">🔍</div>
						<h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">No products found</h3>
						<p className="text-gray-600">Try adjusting your search or filter criteria.</p>
					</div>
				)}
			</div>
		
		</div>
		<Footer />

		{/* Quotation Modal */}
		{selectedProduct && (
			<QuotationModal
				isOpen={isModalOpen}
				onClose={closeQuotationModal}
				productName={selectedProduct.name}
				productCategory={selectedProduct.category}
			/>
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
};

export default ProductPage;

