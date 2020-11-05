import AsyncStorage from '@react-native-community/async-storage';
import api from '../Api/api';

const KEYS = {
  SAVED_RECIPIES: 'savedRecipies',
};

export const saveRecipies = async (recipies) => {
  await AsyncStorage.setItem(KEYS.SAVED_RECIPIES, JSON.stringify(recipies));
};

export const fetchSavedRecipies = async () => {
  const savedRecipies = JSON.parse(
    await AsyncStorage.getItem(KEYS.SAVED_RECIPIES),
  );
  return savedRecipies;
};

export const fetchPreparedRecipies = async (onProgress) => {
  onProgress('5%');
  try {
    const result = await api.get('/a384eb0d-a3de-4e00-8f15-aa8ccba06a9c', {
      onDownloadProgress: (progress) => {
        onProgress((progress.loaded / progress.total) * 100 + '%');
      },
    });

    return result.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

//  /ac29c368-4c0c-409a-baba-0f97792d1c25
