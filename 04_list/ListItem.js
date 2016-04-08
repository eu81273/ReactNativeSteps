'use strict';

import React, {
	Component,
	View,
	Text,
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
				<Text style={styles.listItemText}>
					{rowData.title}
				</Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	listItem: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#FFFFFF',
		borderBottomColor: '#CCCCCC',
		borderBottomWidth: 1,
		padding: 15,
		marginBottom: 6,
		alignSelf: 'stretch',
	},
	listItemText: {
		fontSize: 12,
		fontWeight: 'bold',
		color: '#AAAAAA',
		textAlign: 'left',
		alignSelf: 'stretch',
	},
});
