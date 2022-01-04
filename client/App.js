import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import Home from "./screens/Home";
import { useEffect, useMemo, useState } from "react";
import { useHttp } from "./hooks/http.hook";

export default function App() {
	const [recipe, setRecipe] = useState([]);
	const { request, loading } = useHttp()
	useEffect(() => {
		try {
			// request("http://192.168.2.76:19000/api/tags").then(res => {
			request("https://selection-recipe.herokuapp.com/api/tags/").then(res => {
				setRecipe(res)
			})
		} catch (e) {
			throw e;
		}
	}, [request])
	// console.log(recipe)
	
	return (
		<View
			style={styles.container}
			// onLoadStart={allRecipes}
		>
			<ImageBackground
				source={require('./images/bgApp1.png')}
				resizeMode="cover"
				style={styles.image}
			>
				<Home recipe={recipe}/>
			</ImageBackground>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
	},
	image: {
		width: '100%',
		height: '100%',
	}
});
