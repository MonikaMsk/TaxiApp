import { ReactNode, createContext, useContext, useState } from "react";

type UserLocation = {
    coordinates: {
        latitude: number;
        longitude: number;
    }
}

type LocationContextProviderProps = {
    children: ReactNode;
}

const useUserLocationContextValue = () => {
    const [userLocation, setUserLocation] = useState<UserLocation>();

    return { userLocation, setUserLocation }
}


type UserLocationContextValue = ReturnType<typeof useUserLocationContextValue>

const UserLocationContex = createContext<UserLocationContextValue | null>(null)

export const UserLocationContextProvider = ({ children }: LocationContextProviderProps) => {
    const userLocationContextValue = useUserLocationContextValue();

    return (
        <UserLocationContex.Provider value={userLocationContextValue}>
            {children}
        </UserLocationContex.Provider>
    )
}

export const useUserLocationContext = () => {
    const context = useContext(UserLocationContex)


    if (!context) {
        throw new Error(
            "Error in useUserLocationContextHook"
        )
    }
    return context;
}