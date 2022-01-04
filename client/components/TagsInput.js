import React, { Component, useEffect, useState } from 'react';
import {
	StyleSheet,
	View
} from 'react-native';
import TagInput from 'react-native-tags-input';
import { EvilIcons, Ionicons } from "@expo/vector-icons";

const mainColor = 'rgba(237, 174, 1, 0.1)';
const TagsInput = ({ enterInputTags }) => {
	const [enterTag, setEnterTag] = useState({ tag: '', tagsArray: [] })
	useEffect(() => {
		enterInputTags(enterTag)
	}, [enterTag])
	return (
		<View style={styles.container}>
			<TagInput
				updateState={(e) => {
					setEnterTag(e)
				}}
				tags={enterTag}
				placeholder="Add ingredient"
				label="Press comma & space to add a tag"
				labelStyle={{ color: '#fff' }}
				leftElement={<EvilIcons
					name="arrow-right"
					size={24}
					color="#fff"
				/>}
				leftElementContainerStyle={{ marginLeft: 3 }}
				containerStyle={{ width: '90%'}}
				inputContainerStyle={[styles.textInput, { backgroundColor: mainColor }]}
				inputStyle={{ color: '#fff' }}
				rightElement={<Ionicons
					name="md-search-outline"
					size={20}
					color="#fff"
				/>}
				// onFocus={() => setState({ tagsColor: '#fff', tagsText: mainColor })}
				// onBlur={() => setState({ tagsColor: mainColor, tagsText: '#fff' })}
				autoCorrect={false}
				tagStyle={styles.tag}
				tagTextStyle={styles.tagText}
				keysForTag={', '}
			/>
		</View>
	);
}
export default TagsInput
const styles = StyleSheet.create({
	container: {
		// flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		position: 'relative',
		zIndex: 2
	},
	textInput: {
		height: 40,
		marginTop: 6,
		paddingHorizontal: 3,
		backgroundColor: mainColor,
	},
	tag: {
		height: 40,
		borderRadius: 0,
		color: '#fff',
		backgroundColor: mainColor,
		paddingHorizontal: 10,
		paddingVertical: 4
	},
	tagText: {
		color: '#999',
		textAlign: "center",
	},
});
