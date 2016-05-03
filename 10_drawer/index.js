import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Text,
	View,
	DrawerLayoutAndroid,
} from 'react-native';

export default class ReactNativeSteps extends Component {
	constructor (props) {
		super(props);
	}

	render() {
 		var RightView = (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
			</View>
		);

		var LeftView = (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
			</View>
		);

		return (
			<DrawerLayoutAndroid
				drawerWidth={300}
				drawerPosition={DrawerLayoutAndroid.positions.Right}
				renderNavigationView={() => RightView}>
				<DrawerLayoutAndroid
					drawerWidth={300}
					drawerPosition={DrawerLayoutAndroid.positions.Left}
					renderNavigationView={() => LeftView}>
					<View style={{flex: 1, alignItems: 'center'}}>
						<Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
						<Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
					</View>
				</DrawerLayoutAndroid>
			</DrawerLayoutAndroid>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	blueView: {
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#336699',
	},
	redView: {
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#996633',
	},
});
