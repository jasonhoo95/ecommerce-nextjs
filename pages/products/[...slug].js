export default function Product() {
	return (
		<div>
			<div className="container row">
				<div className="col-md-6">
					<img src="https://cdn.store-assets.com/s/293714/i/11575603.jpeg?width=1024&format=webp" width="100%" height="500px" alt="Los Angeles" />
				</div>

				<div className="col-md-6">
					<h2 className="pt-3">IKAN BILIS DELICIOUS</h2>
					<span>RM 100</span>{" "}
					<span style={{ opacity: 0.5 }}>
						<s>RM 80</s>
					</span>
					<div style={{ fontSize: "30px", fontWeight: "bold" }}>
						<label>Quantity</label>
					</div>
					<div className="input-form">
						<span style={{ padding: "0 10px", cursor: "pointer" }}>-</span>
						<input className="input-number" value="1" type="number"></input>
						<span style={{ padding: "0 10px", cursor: "pointer" }}>+</span>
					</div>
				</div>
			</div>
		</div>
	);
}
