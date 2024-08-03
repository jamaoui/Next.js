import {notFound} from "next/navigation";

export default  function Country({params}) {
  const {countryName} = params;
  if(countryName === 'israel') {
    notFound()
  }
  return <div>Country: {countryName}</div>
}