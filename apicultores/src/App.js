import './App.css';
import React, { useEffect, useState } from 'react';
import { database } from './firebase';
import { ref, onValue } from 'firebase/database';
import GraficoLinha from "./components/GraficoLinha";

function App() {
	const dataRef = ref(database, 'bee_data');
	const timestamps = [];
	const sensacaoTermicaApi = [];
	const temperaturaApi = [];
	const umidadeApi = [];
	const pressaoApi = [];
	const temperaturaRsp = [];
	const umidadeRsp = [];
	const pressaoRsp = [];

	const [dados, setDados] = useState({
		labels: timestamps,
		datasets: [
		  {
			label: "Sensacao termica API (°C)",
			data: sensacaoTermicaApi,
			borderWidth: 2,
		  },
		  {
			label: "Temperatura API (°C)",
			data: temperaturaApi,
			borderWidth: 2,
		  },
		  {
			label: "Umidade API (%)",
			data: umidadeApi,
			borderWidth: 2,
		  },
		  {
			label: "Pressao API (hPa)",
			data: pressaoApi,
			borderWidth: 2,
		  },
		  {
			label: "Temperatura Rsp (°C)",
			data: temperaturaRsp,
			borderWidth: 2,
		  },
		  {
			label: "Umidade Rsp (%)",
			data: umidadeRsp,
			borderWidth: 2,
		  },
		  {
			label: "Pressao Rsp (hPa)",
			data: pressaoRsp,
			borderWidth: 2,
		  },
		],
	  });
	  console.log("beeeeee");

	useEffect(() => {
		const fetchData = async () => {
			onValue(dataRef, (snapshot) => {
				const values = snapshot.val();

				for (let key in values) {
					timestamps.push(key);
					sensacaoTermicaApi.push((values[key].openweathermap.main.feels_like) - 273);
					temperaturaApi.push((values[key].openweathermap.main.temp) - 273);
					umidadeApi.push(values[key].openweathermap.main.humidity);
					pressaoApi.push(values[key].openweathermap.main.grnd_level);
					temperaturaRsp.push(values[key].sensor.temperatura_interna);
					umidadeRsp.push(values[key].sensor.umidade_interna);
					pressaoRsp.push(values[key].sensor.pressao_interna);
				}
			});
		};
		fetchData();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Dashboard Dados Firebase </h1>
			</header>
			<main className='Main-Body'>
				<div style={{ width:850, backgroundColor: 'white'}}>
					<h3>Selecione na legenda quais informações gostaria de ver</h3>
					<GraficoLinha dadosGrafico={dados}/>
				</div>
  			</main>
			<footer>
				<p>&copy; 2024 Universidade Estadual de Campinas.</p>
			</footer>
		</div>
	);
}

export default App;
