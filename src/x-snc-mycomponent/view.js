export default (state, { dispatch }) => {

	const { properties } = state;

	return (
		<div className="root"
			style={{ height: '100%', width: '100%' }}>
			<div>Data provided is </div>
			<ol>
			{
				properties.data.map((record, index) => (
					<li>Task {record.Id} - {record.description}!</li>
				))
			}
			</ol>
		</div >)
};