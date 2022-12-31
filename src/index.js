import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import {ThemeProvider, createTheme} from "@mui/material";
// import {red} from "@mui/material/colors"

// const theme = createTheme({
// 	palette: {
// 		primary: {
// 			main: "#ccc"
// 		}
// 	},
// 	myCustomColor: {
// 		main: red[400],
// 		superDark: red[800],
// 		superLight: red[100]
// 	},
// 	typography: {
// 		myVariant: {
// 			fontSize: "21px"
// 		}
// 	}
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		{/* <ThemeProvider theme={theme}> */}
			<App />
		{/* </ThemeProvider> */}
  </React.StrictMode>
);
