"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import PageHeader from "../ui/PageHeader";
import "leaflet/dist/leaflet.css";
import { Icon as LeafletIcon } from "leaflet";

const locations = [
  {
    name: "Mersin",
    coordinates: [36.8121, 34.6415],
    year: "2025",
    isLatest: true,
    image: "/travels/mersin.jpg",
  },
  {
    name: "Istanbul",
    coordinates: [41.0082, 28.9784],
    year: "2025",
  },
  {
    name: "Madrid",
    coordinates: [40.4168, -3.7038],
    year: "2024,2025",
  },
  {
    name: "London",
    coordinates: [51.5074, -0.1276],
    year: "2019",
  },
  {
    name: "Paris",
    coordinates: [48.8566, 2.3522],
    year: "2016",
  },
  {
    name: "Rome",
    coordinates: [41.9028, 12.4964],
    image: "/travels/rome.jpg",
    year: "2023",
  },
  {
    name: "Marrakech",
    coordinates: [31.6295, -8.0083],
    image: "/travels/marrakech.jpg",
    year: "2024",
  },
  {
    name: "São Paulo",
    coordinates: [-23.5505, -46.6333],
    image: "/travels/saopaulo.jpg",
    year: "2022",
  },
  {
    name: "Fortaleza",
    coordinates: [-3.7319, -38.5434],
    image: "/travels/fortaleza.jpg",
    year: "2024",
  },
  {
    name: "Transilvania",
    coordinates: [46.7712, 23.6236],
    image: "/travels/transilvania.jpg",
    year: "2023",
  },
  {
    name: "Marseille",
    coordinates: [43.2965, 5.3698],
    image: "/travels/marseille.jpg",
    year: "2023",
  },
  {
    name: "Sevilla",
    coordinates: [37.3891, -5.9845],
    image: "/travels/sevilla.jpg",
    year: "2024",
  },
  {
    name: "Oporto",
    coordinates: [41.1579, -8.6291],
    year: "2021",
  },
  {
    name: "San Francisco",
    coordinates: [37.7749, -122.4194],
    year: "June 2025",
    image: "/travels/sf.jpg",
  },
  {
    name: "Prague",
    coordinates: [50.0755, 14.4378],
    year: "July 2025",
    image: "/travels/prague.jpg",
  },
  {
    name: "Vienna",
    coordinates: [48.2082, 16.3738],
    year: "July 2025",
  },
  {
    name: "Budapest",
    coordinates: [47.4979, 19.0402],
    year: "July 2025",
    image: "/travels/budapest.jpg",
  },
  {
    name: "New York",
    coordinates: [40.7128, -74.006],
    isFuture: true,
    unspecifiedDate: true,
  },
  {
    name: "Dubai",
    coordinates: [25.276987, 55.296249],
    unspecifiedDate: true,
    isFuture: true,
  },
  {
    name: "Tokyo",
    coordinates: [35.682839, 139.759455],
    unspecifiedDate: true,
    isFuture: true,
  },
].sort((a, b) => {
  if (a.unspecifiedDate && b.unspecifiedDate) return 0;
  if (a.unspecifiedDate) return -1;
  if (b.unspecifiedDate) return 1;
  return Number(b.year) - Number(a.year);
});

// Dynamically import MapContainer to avoid SSR issues
const Map = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const Polyline = dynamic(
  () => import("react-leaflet").then((mod) => mod.Polyline),
  { ssr: false }
);

export default function TravelMap() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [showJourneyStory, setShowJourneyStory] = useState(false);
  const [icons, setIcons] = useState<{
    customIcon: LeafletIcon;
    futureIcon: LeafletIcon;
    latestIcon: LeafletIcon;
  } | null>(null);

  useEffect(() => {
    // Import Icon from leaflet only on client side
    import("leaflet").then(({ Icon }) => {
      const customIcon = new Icon({
        iconUrl:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23EF4444' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='8' fill='%23EF4444' stroke='white' stroke-width='3'/%3E%3Ccircle cx='12' cy='12' r='4' fill='white'/%3E%3C/svg%3E",
        iconSize: [38, 38],
        iconAnchor: [19, 19],
      });

      const futureIcon = new Icon({
        iconUrl:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236366F1' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='8' fill='%236366F1' stroke='white' stroke-width='3' stroke-dasharray='4 2'/%3E%3Ccircle cx='12' cy='12' r='4' fill='white'/%3E%3C/svg%3E",
        iconSize: [38, 38],
        iconAnchor: [19, 19],
      });

      const latestIcon = new Icon({
        iconUrl:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2322C55E' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='8' fill='%2322C55E' stroke='white' stroke-width='3'/%3E%3Ccircle cx='12' cy='12' r='4' fill='white'/%3E%3C/svg%3E",
        iconSize: [48, 48],
        iconAnchor: [24, 24],
      });

      setIcons({ customIcon, futureIcon, latestIcon });
    });
  }, []);

  if (!icons) {
    return null; // Or a loading state
  }

  return (
    <div className="flex flex-col gap-4 sm:gap-8 w-full max-w-7xl mx-auto items-center justify-start px-2 sm:px-8 ">
      <PageHeader
        title="My Trips"
        subtitle="Traveling has greatly contributed to my growth, enabling me to experience diverse cultures and broaden my perspective. This map highlights my past adventures and future aspirations, showcasing my passion for exploration."
      >
        <div className="flex gap-4 sm:gap-6 items-center justify-center text-xs sm:text-sm bg-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-red-500 ring-2 ring-red-200"></div>
            <span className="font-medium">Past Travels</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-indigo-500 ring-2 ring-indigo-200"></div>
            <span className="font-medium">Future Plans</span>
          </div>
        </div>
      </PageHeader>

      <div className="relative w-full h-[500px]  rounded-xl sm:rounded-3xl shadow-xl overflow-hidden border border-gray-200">
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent z-[1000] pointer-events-none" />
        <Map
          center={[35, -20]}
          zoom={3}
          className="w-full h-full rounded-3xl [&_.leaflet-tile-pane]:opacity-90 [&_.leaflet-control-attribution]:hidden"
          maxBounds={[
            [-90, -180],
            [90, 180],
          ]}
          minZoom={2}
          zoomControl={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            className="opacity-95"
          />
          {locations.map(({ name, coordinates, isFuture, isLatest }) => (
            <Marker
              key={name}
              position={coordinates as [number, number]}
              icon={
                isLatest
                  ? icons.latestIcon
                  : isFuture
                  ? icons.futureIcon
                  : icons.customIcon
              }
              eventHandlers={{
                click: () => {
                  if (name === "Istanbul") {
                    setShowJourneyStory(true);
                  } else {
                    setSelectedLocation(name);
                  }
                },
              }}
            />
          ))}

          {/* Journey line from Istanbul to Mersin via Ankara */}
          <Polyline
            positions={[
              [41.0082, 28.9784], // Istanbul
              [39.9334, 32.8597], // Ankara
              [36.8121, 34.6415], // Mersin
            ]}
            color="#6366F1"
            weight={3}
            dashArray="5, 10"
          />
        </Map>

        {selectedLocation && (
          <div className="absolute w-[calc(100%-2rem)] sm:w-auto sm:min-w-[350px] bottom-4 h-fit sm:top-4 left-4 sm:left-auto sm:right-4 bg-white/95 backdrop-blur-md p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 transform z-[2000]">
            <button
              onClick={() => setSelectedLocation(null)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors p-1.5 sm:p-2 hover:bg-gray-100 rounded-full"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {selectedLocation}
                </h3>
                <span
                  className={`text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ${
                    locations.find((loc) => loc.name === selectedLocation)
                      ?.isFuture
                      ? "bg-indigo-100 text-indigo-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {locations.find((loc) => loc.name === selectedLocation)
                    ?.unspecifiedDate
                    ? "Future Plan"
                    : locations.find((loc) => loc.name === selectedLocation)
                        ?.year +
                      (locations.find((loc) => loc.name === selectedLocation)
                        ?.isFuture
                        ? " (Planned)"
                        : "")}
                </span>
              </div>
              {locations.find((loc) => loc.name === selectedLocation)
                ?.image && (
                <div className="relative w-full h-[160px] sm:h-[220px] overflow-hidden rounded-lg sm:rounded-xl">
                  <Image
                    src={
                      locations.find((loc) => loc.name === selectedLocation)!
                        .image || ""
                    }
                    alt={`Travel photo from ${selectedLocation}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {showJourneyStory && (
          <div className="absolute w-[calc(100%-2rem)] sm:w-auto sm:min-w-[350px] bottom-4 h-fit sm:top-4 left-4 sm:left-auto sm:right-4 bg-white/95 backdrop-blur-md p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 transform z-[2000]">
            <button
              onClick={() => setShowJourneyStory(false)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors p-1.5 sm:p-2 hover:bg-gray-100 rounded-full"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="flex w-fit flex-col gap-3 sm:gap-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                The Unexpected Journey
              </h3>
              <p className="text-gray-600 w-fit">
                After missing our flight, me and my friends ended up on a crazy
                15-hour bus ride from Istanbul to Mersin via Ankara. What seemed
                like a total disaster at first turned into this wild adventure
                through Turkey - we got to see some amazing views and meet super
                friendly locals who made the long journey way more fun than we
                expected!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
