import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Text,
	View,
	ViewPagerAndroid,
} from 'react-native';

export default class ReactNativeSteps extends Component {
	constructor (props) {
		super(props);

		this.state = {
			indicator: "ViewPager 테스트"
		};
	}

	render() {
		return (
			<View
				style={styles.container} >
				<View>
					<Text>{this.state.indicator}</Text>
				</View>
				<ViewPagerAndroid
					style={styles.container}
					onPageScroll={this.onPageScroll.bind(this)}
					onPageSelected={this.onPageSelected.bind(this)}
					onPageScrollStateChanged={this.onPageScrollStateChanged.bind(this)}
					initialPage={0}>
					<View style={styles.blueView}>
						<Text>First page</Text>
					</View>
					<View style={styles.redView}>
						<Text>Second page</Text>
					</View>
				</ViewPagerAndroid>
			</View>
		);
	}

	onPageScroll (e) {
		this.setState({indicator: JSON.stringify(e.nativeEvent)});
	}

	onPageSelected (e) {
		this.setState({indicator: e.nativeEvent.position});
	}

	onPageScrollStateChanged () {

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
