import CookieConsentBanner from "@/components/CookieConsentBanner";
import FirebaseProvider from "./modules/FirebaseProvider";

const AppProvider = ({
	children
}: {
	children: React.ReactNode
}) => {
	return (
		<FirebaseProvider>
      {children}
      <CookieConsentBanner />
		</FirebaseProvider>
	);
}

export default AppProvider;
