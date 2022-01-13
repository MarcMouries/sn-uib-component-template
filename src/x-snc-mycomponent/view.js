export default (state, { dispatch }) => {

	const { properties } = state;

	return (
		<div className="mycomponent">
			<section className="glass">
				<div className="cards">
				<h1>Data provided</h1>
				{
						properties.items.map((item, index) => (
							<div className="card">
							    <h2>{item.id} - {item.description}</h2>
							</div>
						))
					}
				</div>
			</section>
		</div >)
};