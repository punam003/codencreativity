import DashboardSideBar from "@/components/DashboardSideBar";

export default function DashboardLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='flex'>
          <DashboardSideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
