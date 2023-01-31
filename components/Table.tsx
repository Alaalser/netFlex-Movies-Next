import { Product } from "@stripe/firestore-stripe-payments";
import { CheckIcon } from "@heroicons/react/24/outline";

interface Props {
  products: Product[];
  selectedPlan: Product | null;
}

function Table({ products, selectedPlan }: Props) {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly price</td>
          {products.map((prod) => {
            return (
              <td
                key={prod.id}
                className={`tableDataFeature ${
                  selectedPlan?.id === prod.id ? "text-[#E50914]" : "text-[grey"
                } `}
              >
                USD {prod.prices[0].unit_amount!}
              </td>
            );
          })}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video quality</td>
          {products.map((prod) => {
            return (
              <td
                key={prod.id}
                className={`tableDataFeature ${
                  selectedPlan?.id === prod.id ? "text-[#E50914]" : "text-[grey"
                } `}
              >
                USD {prod.metadata.videoQuality}
              </td>
            );
          })}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? "text-[#E50914]"
                  : "text-[gray]"
              }`}
              key={product.id}
            >
              {product.metadata.portability === "true" && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
