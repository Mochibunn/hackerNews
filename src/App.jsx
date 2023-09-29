
import { useState, useEffect } from "react";
import axios from "axios";

import HackNav from './components/HackNav'
import HackContent from './components/HackContent'
import { ModalFooter } from '@nextui-org/modal'


export default function App() {
  const [newsContent, setNewsContent] = useState(null); // Initialize newsContent to null
  const apiUrl = "https://hn.algolia.com/api/v1/search?query=react";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setNewsContent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <div>
      <HackNav setNewsContent={setNewsContent} /> 
      <HackContent newsContent={newsContent} /> 
    </div>
  );
}




{/* <section className='py-36'>
  <div className='container flex items-center justify-center'>
    <Card className='py-4 lg:w-3/4 xl:w-1/2'>
      <CardBody className='overflow-visible py-2'>
        <div className='flex gap-6'>
          <img alt='Shoe' className='flex-1 object-cover' src={shoe} />
          <div className='flex-1'>
            <h2 className='text-lg font-bold uppercase'>
              Nike Adapt BB 2.0
            </h2>
            <p className='text-sm text-default-500'>
              Consistent, customized fit, game-changing.
            </p>

            <div className='mb-6 mt-2 flex gap-3'>
              <span className='font-bold'>$279.79</span>
              <span className='text-default-600 line-through'>$350</span>
              <span className='text-success'>20% off</span>
            </div>

            <ProductSize />

            <div className='mt-6 flex gap-6'>
              <Button color='primary'>Buy now</Button>
              <Button color='primary' variant='bordered' radius='full'>
                Add to bag
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  </div>
</section> */}

