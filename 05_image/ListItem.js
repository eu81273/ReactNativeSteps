'use strict';

import React, {
	Component,
	View,
	Text,
	Image,
	StyleSheet,
} from 'react-native';

export default class ListItem extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		let rowData = this.props.rowData;

		return (
			<View style={styles.listItem}>
				<Image
					style={styles.coverImage}
					resizeMode="cover"
					source={{
						uri:rowData.image
					}}>

					<View style={styles.titleWrapper}>
						<Text style={styles.title}>
							{rowData.title}
						</Text>
					</View>

				</Image>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	listItem: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#FFFFFF',
		borderTopColor: '#CCCCCC',
		borderTopWidth: 1,
		padding: 0,
		marginBottom: 30,
		alignSelf: 'stretch',
	},
	coverImage: {
		width: 300,
		height: 300,
		margin: 0,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
	},
	titleWrapper: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'rgba(0,0,0,.8)',
		height: 70,
		padding: 10,
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#FFFFFF',
	}
});
