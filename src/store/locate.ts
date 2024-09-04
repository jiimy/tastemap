import { create } from "zustand";

interface LocateState {
  locate: {
    latitude: number;
    longitude: number;
  };
  address: string;
  setLocate: (state: any) => void;
  setAddress: (state: string) => void;
}

// 테스트 코드
export const LocateStateStore = create<LocateState>()((set) => ({
  locate: {
    latitude: 0,
    longitude: 0,
  },
  address: "",
  // increase: (by) => set((state) => ({ bears: state.bears + by })),
  // updateLocate: (newLatitude: any, newLongitude: any) => set({ latitude: newLatitude, longitude: newLongitude }),
  // setLocate: () => set((state) => ({ ...state })),
  setLocate: (state: any) => set({ locate: state }),
  setAddress: (state: string) => set({ address: state }),
}));
