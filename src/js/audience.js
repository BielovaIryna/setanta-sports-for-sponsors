import { ott } from "./audience-data";
import { smm } from "./audience-data";
import { youtube } from "./audience-data";
import Chart from 'chart.js/auto'
Chart.defaults.defaultFontSize = 20;

const canvasOtt = document.querySelector('#ott');
const canvasYoutube = document.querySelector('#youtube');
const canvasSmm = document.querySelector('#smm');

const createRadarChart = (dataInf, canvas) => {
	let context = canvas.getContext('2d');
	let data = {
		labels: dataInf.map(row => row.age),
		datasets: [{ data: dataInf.map(row => row.count), pointStyle: false, borderWidth: 3, borderColor: '#FFD106', backgroundColor: 'transparent', }]
	}
	const config = {
		type: 'radar',
		data: data,
		options: {
			scales: {
				r: {
					angleLines: {
						color: "black"
					},
					grid:{
						color:"black"
					}, 
					pointLabels:{
						color:"black",
						font:{
							size:10
						}
						
					},
					ticks:{
						color:"black",
						font:{
							size:10
						}
					}
				}

			},
			elements: {
				line: {
					borderWidth: 3
				}
			},
			plugins: {
				legend: {
					display: false,

				},
				tooltips: {
					enabled: false
				},

			},
			// scale: {
			// 	ticks: {
			// 		beginAtZero: true,
			// 		min: 0,
			// 		max: 40,
			// 		stepSize: 20
			// 	}
			// }

		}


	}


	new Chart(context, config);
	Chart.defaults.defaultFontSize = 20;
};
createRadarChart(ott, canvasOtt);
createRadarChart(youtube, canvasYoutube);
createRadarChart(smm, canvasSmm)