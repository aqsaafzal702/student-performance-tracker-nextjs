import Sidebar from "../components/Sidebar";
import AnnouncementForm from "../components/AnnouncementForm";
import AnnouncementList from "../components/AnnouncementList";

export default function AnnouncementsPage() {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      <Sidebar active="announcements" />
      <main className="flex-grow p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-5">Announcements</h1>
        <AnnouncementForm />
        <AnnouncementList />
      </main>
    </div>
  );
}
