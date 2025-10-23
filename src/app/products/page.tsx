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

const ProductPage = () => {
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

	// sync from URL
	useEffect(() => {
		const q = searchParams?.get("category") ?? "all";
		if (q) setActiveCategory(q);
	}, [searchParams]);

	// Flatten products
	const allProducts = useMemo(() => {
		return categories.flatMap((c) => c.data.map((p) => ({ ...p, category: c.name, categoryId: c.id })));
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
		const params = new URLSearchParams(Array.from(searchParams.entries()));
		if (id === "all") params.delete("category"); else params.set("category", id);
		router.push(`/products?${params.toString()}`);
	};

	return (
		<div className="min-h-screen bg-white py-12 px-6 md:px-12 lg:px-20">
			<div className="max-w-7xl mx-auto">
				<header className="text-center mb-10">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900">Products</h1>
					<p className="text-gray-600 mt-3">Explore our range of industrial castings and components.</p>
				</header>

				{/* category chips */}
				<div className="mb-8 flex flex-wrap gap-3 justify-center">
					<button onClick={() => goToCategory("all")} className={`px-4 py-2 rounded-full border ${activeCategory === "all" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>
						All
					</button>
					{categories.map((c) => (
						<button key={c.id} onClick={() => goToCategory(c.id)} className={`px-4 py-2 rounded-full border ${activeCategory === c.id ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>
							{c.name}
						</button>
					))}
				</div>

				{/* filters */}
				<div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="md:col-span-2 flex gap-4">
						<input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search products" className="w-full border border-gray-300 rounded px-4 py-2" />
						<button onClick={() => setSearchTerm("")} className="px-4 py-2 border border-gray-300 rounded">Clear</button>
					</div>

					<div>
						<select value={activeCategory} onChange={(e) => goToCategory(e.target.value)} className="w-full border border-gray-300 rounded px-4 py-2">
							<option value="all">All Categories</option>
							{categories.map((c) => (
								<option key={c.id} value={c.id}>{c.name}</option>
							))}
						</select>
					</div>
				</div>

				{/* products grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{filtered.map((p, idx) => (
						<article key={`${p.categoryId}-${idx}`} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
							<div className="relative h-56 w-full">
								<Image src={p.image} alt={p.name} fill className="object-cover" />
							</div>
							<div className="p-4">
								<h3 className="font-semibold text-lg text-gray-900">{p.name}</h3>
								<p className="text-gray-600 mt-2 text-sm">{p.description}</p>
								<div className="mt-4 flex items-center justify-between">
									<span className="text-xs text-gray-500">{p.category}</span>
									<button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Request Quote</button>
								</div>
							</div>
						</article>
					))}
				</div>

				{filtered.length === 0 && <div className="text-center py-16 text-gray-600">No products match your search.</div>}
			</div>
		</div>
	);
};

export default ProductPage;

