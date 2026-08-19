import type { ContactData } from "@/lib/definition";

export default function ContactItem({ title, subtitle, icon }: ContactData) {
  return (
    < div className="flex font-ubuntu items-center gap-3 p-4 transition-colors group hover:bg-gray-100 hover:cursor-default">
      {icon}
      <div className="flex flex-col">
        <h3 className="font-semibold text-gray-800 group-hover:text-black">{title}</h3>
        <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900">{subtitle}</p>
      </div>
    </div>
  );
}
