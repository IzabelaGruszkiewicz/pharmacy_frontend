import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {useLoaderData} from "react-router-dom";
import "leaflet/dist/leaflet.css";


export function MapLeaflet() {
    const pharmacies = useLoaderData();

    const mappedPharmacies = pharmacies.map(pharmacy => ({
        ...pharmacy,
        geolocation: [pharmacy.x, pharmacy.y]
    }));
    console.log(mappedPharmacies)

    return(
        <div>
            <MapContainer center={[50.05652225476928, 19.919999500000003]} zoom={14}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">
                </TileLayer>
                {mappedPharmacies.map((pharmacy) => (
                    <Marker key={pharmacy.x} position={pharmacy.geolocation}>
                        <Popup>
                            Adres: {pharmacy.location} <br/>
                            Godziny otwarcia: {pharmacy.openingHour} <br/>
                            Godziny zamknięcia: {pharmacy.closingHour} <br/>
                            Numer telefonu: {pharmacy.phoneNumber}
                        </Popup>
                    </Marker>
                    ))}
            </MapContainer>
        </div>
    );

}