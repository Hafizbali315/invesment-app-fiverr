import { Link } from 'react-router-dom'

const Billingspage = () => {
	return (
		<div className="billings_page container-fluid">
			<div className="my-4 row">
				<div className="col-lg-4 ">
					<div className="welcome_section">
						<div>
							<h6>Welcome</h6>
							<h1>John Doe</h1>

							<span>Customer Id: 001923</span>
						</div>
					</div>
				</div>

				<div className="col-lg-4 ">
					<div className="last_payment_section">
						<div>
							<h6>Last Payment</h6>
							<h1>$99.90</h1>
							<span>
								last Transaction on 24th September,2021.{' '}
								<Link className="link" to="/view-history">
									View History
								</Link>
							</span>
						</div>
					</div>
				</div>

				<div className="col-lg-4 ">
					<div className="billing_info_section">
						<div>
							<h6>Billing Information</h6>
							<p>Name : John Doe</p>
							<p>Credit Card: 5232029403750779</p>
							<p>Billing Address: House 4, Street 2, ABC</p>
						</div>
					</div>
				</div>
			</div>

			<div className="invoice_btn_row">
				<button>Generate Invoice</button>
			</div>

			<div className="my-4 payment_history_table">
				<div className="row">
					<div className="my-2 col-lg-4 col-12 my-lg-0">
						<h6>Payment History</h6>
					</div>

					<div className="my-2 col-lg-8 col-12 my-lg-0">
						<div className="row">
							<div className="col-lg-6">
								<div className="from_date">
									<label>From: </label>
									<input type="date" placeholder="July, 2021" />
								</div>
							</div>

							<div className="col-lg-6">
								<div className="to_date">
									<label>To: </label>
									<input type="date" placeholder="November, 2021" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="my-4 table-responsive">
					<table className="table">
						<tbody>
							<tr>
								<th>PAYMENT ID</th>
								<th>MONTHLY CHARGE</th>
								<th>CHARGES FOR</th>
								<th>DATE</th>
								<th>STATUS</th>
							</tr>

							<tr>
								<td># 21232</td>
								<td>$49.95</td>
								<td>Venture A</td>
								<td>08/24/2021</td>
								<td style={{ color: '#00ba35' }}>Cleared</td>
							</tr>

							<tr>
								<td># 21233</td>
								<td>$99.90</td>
								<td>Venture A, Venture B</td>
								<td>09/24/2021</td>
								<td style={{ color: '#f05a5a' }}>Error</td>
							</tr>
							<tr>
								<td># 21232</td>
								<td>$49.95</td>
								<td>Venture A</td>
								<td>08/24/2021</td>
								<td style={{ color: '#00ba35' }}>Cleared</td>
							</tr>

							<tr>
								<td># 21233</td>
								<td>$99.90</td>
								<td>Venture A, Venture B</td>
								<td>09/24/2021</td>
								<td style={{ color: '#f05a5a' }}>Error</td>
							</tr>

							<tr>
								<td># 21233</td>
								<td>$99.90</td>
								<td>Venture A, Venture B</td>
								<td>09/24/2021</td>
								<td>Error</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Billingspage
