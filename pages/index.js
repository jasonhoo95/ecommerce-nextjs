import Head from "next/head";
import styles from "../styles/Home.module.css";
import CardLayout from "../components/cardLayout";
import LeaderBoard from "../components/leaderBoard";
export default function Home() {
	return (
		<div>
			{/* <div className="container">
				<div>yoyo yeah is good</div>
			</div> */}

			<div className="background-image"></div>
			<div className="main-text">IKAN BILIS IS HERE</div>
			<CardLayout />

			<div className="container">
				<div id="demo" data-interval="false" className="carousel slide" data-ride="carousel">
					<ul className="carousel-indicators">
						<li data-target="#demo" data-slide-to="0" className="active"></li>
						<li data-target="#demo" data-slide-to="1"></li>
						<li data-target="#demo" data-slide-to="2"></li>
					</ul>

					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src="image1.jpeg" width="100%" height="500px" alt="Los Angeles" />
						</div>
						<div className="carousel-item">
							<img src="ikanbilis.jpg" width="100%" height="500px" alt="Chicago" />
						</div>
					</div>

					<a className="carousel-control-prev" href="#demo" data-slide="prev">
						<span className="carousel-control-prev-icon"></span>
					</a>
					<a className="carousel-control-next" href="#demo" data-slide="next">
						<span className="carousel-control-next-icon"></span>
					</a>
				</div>
			</div>
		</div>
	);
}
