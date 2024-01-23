import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveItem = async (key: string, value: string) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (error) {
		console.warn(error);
	}
};

export const getItem = async (key: string) => {
	try {
		const item = await AsyncStorage.getItem(key);

		if (item) {
			return item;
		}
	} catch (error) {
		console.warn(error);
	}
};
