export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
