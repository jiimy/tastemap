import { create } from 'zustand'

interface LocateState {
  locate: {
    latitude: number;
    longitude: number;
  }
  setLocate: (state: any) => void;
}

// 테스트 코드
export const LocateStateStore = create<LocateState>()((set) => ({
  locate: {
    latitude: 0,
    longitude: 0,
  },
  // increase: (by) => set((state) => ({ bears: state.bears + by })),
  // updateLocate: (newLatitude: any, newLongitude: any) => set({ latitude: newLatitude, longitude: newLongitude }),
  setLocate: () => set((state) => ({ ...state })),
}))