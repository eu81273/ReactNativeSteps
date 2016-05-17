import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity,
} from 'react-native';

export default class ReactNativeSteps extends Component {
	constructor (props) {
		super(props);

		this.state = {
			hidden: false
		};
	}

	render () {
		return (
			<View style={styles.container}>
				<StatusBar
					translucent={true}
					backgroundColor={"silver"}
					animated={true}
					hidden={this.state.hidden}
					barStyle={"default"} />
				<TouchableOpacity onPress={this.toggleStatusBar.bind(this)}>
					<Text style={{margin:50}}>상태바 보이기/숨기기</Text>
				</TouchableOpacity>
			</View>
		);
	}

	toggleStatusBar () {
		this.setState({
			hidden: !this.state.hidden
		})
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
