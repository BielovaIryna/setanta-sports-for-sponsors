// const ott = [
// 	{ age: "<18", count: 1 },
// 	{ age: "18-24", count: 10 },
// 	{ age: "25-34", count: 40 },
// 	{ age: "35-44", count: 26 },
// 	{ age: "45-54", count: 13 },
// 	{ age: "55-64", count: 7 },
// 	{ age: "65<", count: 3 },
// ];
// const youtube = [
// 	{ age: "13-17", count: 1 },
// 	{ age: "18-24", count: 10 },
// 	{ age: "25-34", count: 21 },
// 	{ age: "35-44", count: 19 },
// 	{ age: "45-54", count: 17 },
// 	{ age: "55-64", count: 18 },
// 	{ age: "65<", count: 15 },
// ];
// const smm = [
// 	{ age: "18-24", count: 18 },
// 	{ age: "25-34", count: 28 },
// 	{ age: "35-44", count: 35 },
// 	{ age: "45-54", count: 19 },
	
// ];

	
// Chart.defaults.defaultFontSize = 20;
// const canvasOtt = document.querySelector('#ott');
// const canvasYoutube = document.querySelector('#youtube');
// const canvasSmm = document.querySelector('#smm');


// const createRadarChart = (dataInf, canvas) => {
// 	let context = canvas.getContext('2d');
// 	let data = {
// 	labels: dataInf.map(row => row.age),
// 	datasets: [{ data: dataInf.map(row => row.count), pointStyle:false, borderWidth:3, borderColor: '#FFD106', backgroundColor: 'transparent', }]
// }
// let config ={
// 	type: 'radar',
// 	data: data,
// 	options:{
// 		plugins:{
// 			legend: {
// 				display: false,
				
// 			  },
// 			  tooltips: {
// 				enabled: false
// 			 },
			
// 			},
// 		scale:{
// 			ticks: {
// 				beginAtZero: true,
// 				min: 0,
// 				max: 40,
// 				stepSize: 20
// 			  }
// 		}	
			
// 		}
		
		
// }
	

// let myChart = new Chart(context, config);
// };
// createRadarChart(ott, canvasOtt);
// createRadarChart(youtube, canvasYoutube);
// createRadarChart(smm,canvasSmm)


