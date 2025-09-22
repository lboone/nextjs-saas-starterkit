import { PricingTable, Protect } from "@clerk/nextjs";

function ActualFeatures() {
  return (
    <div>
      <h1>Actual Features</h1>
    </div>
  );
}

function UpgradeCard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Upgrade to Pro</h1>
        <p className="text-sm text-gray-500">
          Upgrade to Pro to access all features
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <PricingTable />
      </div>
    </div>
  );
}

const PaymentGatedPage = () => {
  return (
    <div className="px-4">
      <Protect
        condition={(has) => {
          return !has({ plan: "free_user" });
        }}
        fallback={<UpgradeCard />}
      >
        <ActualFeatures />
      </Protect>
    </div>
  );
};
export default PaymentGatedPage;
