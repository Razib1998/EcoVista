import "../globals.css";

export const metadata = {
  title: "EcoVista",
  description: "One place Dashboard for Eco Information",
};

export default function RootLayout({ children, aqi }) {
  return (
    <div className="wrapper">
      {children}
      {aqi}
    </div>
  );
}
