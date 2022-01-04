import React, { useEffect, useState } from 'react';
import {
	TextInput,
	View,
	StyleSheet,
	Text,
	Platform,
	TouchableNativeFeedback,
	TouchableOpacity,
	ScrollView
} from "react-native";
import TagsInput from "../components/TagsInput";
import { AntDesign } from "@expo/vector-icons";

const Home = ({ recipe }) => {
	const [text, setText] = useState('')
	const [inputTags, setInputTags] = useState([])
	const [coincidence, setCoincidence] = useState([])
	const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
	const enterInputTags = (tags) => {
		console.log(tags.tagsArray)
		setInputTags(tags)
	}
	// useEffect(() => {
	// 	console.log(inputTags)
	// 	// setCoincidence(recipe.map(item => item.filter(it => it === inputTags)))
	// }, [inputTags])
	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				Recipes by Ingredient
			</Text>
			<View style={styles.inpBlock}>
				{/*<TextInput*/}
				{/*	style={styles.input}*/}
				{/*	placeholder="Add ingredient"*/}
				{/*	onChangeText={text => setText(text)}*/}
				{/*	defaultValue={text}*/}
				{/*	placeholderTextColor={'rgba(250,250,250, 0.2)'}*/}
				{/*/>*/}
				<TagsInput enterInputTags={enterInputTags} />
				{/*<Wrapper*/}
				{/*	onPress={() => console.log('press')}*/}
				{/*	activeOpacity={1}*/}
				{/*>*/}
					{/*<View style={styles.button}>*/}
					{/*	<Text style={styles.text}>*/}
					{/*		<AntDesign*/}
					{/*			name="search1"*/}
					{/*			size={24}*/}
					{/*			color="#fff"*/}
					{/*		/>*/}
					{/*	</Text>*/}
					{/*</View>*/}
				{/*</Wrapper>*/}
			</View>
			<ScrollView style={styles.block}>
				{
					recipe.length > 0 ?
						<View>{recipe.map(item =>
							<Text
								key={item.toString()}
								style={{ ...styles.title, marginBottom: 8 }}
							>
								{item}
							</Text>)}
						</View>
						:
						<Text style={styles.title}>
							Enter ingredients...
						</Text>
				}
			</ScrollView>
		</View>
	);
};
export default Home;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 80,
		paddingHorizontal: 10,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		borderColor: 'transparent',
		position: 'relative',
	},
	title: {
		width: '100%',
		fontSize: 20,
		textAlign: 'center',
		color: '#fff',
		fontWeight: 'bold'
	},
	inpBlock: {
		width: '100%',
		display: "flex",
		paddingVertical: 20,
	},
	// button: {
	// 	width: 60,
	// 	height: 40,
	// 	backgroundColor: 'rgba(237, 174, 1, 0.9)',
	// 	display: "flex",
	// 	justifyContent: 'center',
	// 	alignItems: 'center',
	// },
	text: {
		fontSize: 16,
		color: '#000'
	},
	block: {
		width: '100%',
		// height: '70%',
		backgroundColor: 'rgba(237, 174, 1, 0.1)',
		marginBottom: 15,
	}
});
