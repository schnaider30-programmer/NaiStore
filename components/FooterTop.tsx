import { ContactsData } from "@/lib/data";
import ContactItem from "./ContactItem";

export default function FooterTop() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b group">
      {ContactsData.map((data, i) => (
        <ContactItem
          key={i}
          title={data.title}
          subtitle={data.subtitle}
          icon={data.icon}
        />
      ))}{" "}
    </div>
  );
}
