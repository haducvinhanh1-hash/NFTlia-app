import React, { useEffect, useState } from 'react';
import LayoutDashboard from '../layout/layoutDashboard';
import RankingsDropdown from '../modules/rankings/part/RankingsDropdown';
import Table from '../components/table/Table';
import Checkbox from '../components/checkbox/Checkbox';
import useToggleValue from '../hooks/useToggleValue';
import { collection, onSnapshot } from '@firebase/firestore';
import { db } from '../firebase-app/firebaseConfig';
import IconWrappedEther from '../components/icons/IconWrappedEther';
import IconMore from '../components/icons/IconMore';
const RankingPages = () => {
  const [nftList, setNftList] = useState([]);
  const { value: collections, handleToggleValue: handleCollectionToggleValue } =
    useToggleValue();
  useEffect(() => {
    async function fetchData() {
      const colRef = collection(db, 'nfts');
      onSnapshot(colRef, (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setNftList(results);
      });
    }
    fetchData();
  }, []);

  return (
    <LayoutDashboard height="h-[75rem]">
      <h1 className="text-black1 dark:text-white font-bold text-3xl ml-10 mt-[2.625rem] mb-1 z-10 w-[20rem]">
        Top NFTs
      </h1>
      <p className="font-semibold text-base text-naturalcolor2 ml-10 w-[35rem] mb-[1.875rem]">
        The top NFTs on mxama, ranked by volume, floor price and other
        statistics
      </p>
      <div className="bg-white dark:bg-[#242731] shadow-xl w-[70.25rem] ml-20 h-[50rem] rounded-[0.625rem]">
        <RankingsDropdown></RankingsDropdown>
        <Table>
          <thead>
            <tr className="border border-b-[#F2F2F2] border-t-transparent border-l-transparent border-r-transparent">
              <th className="flex items-center">
                <Checkbox
                  className="mr-4"
                  name="collections"
                  checked={collections}
                  onClick={handleCollectionToggleValue}
                ></Checkbox>
                Collections
              </th>
              <th>Volume</th>
              <th>24h %</th>
              <th>7d %</th>
              <th>Floor Price</th>
              <th>Owners</th>
              <th>Items</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {nftList.length > 0 &&
              nftList.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className="border dark:border-b-[#000000] border-b-[#F2F2F2] border-l-transparent border-r-transparent"
                  >
                    <td className="flex items-center">
                      <Checkbox
                        className="ml-[10px]"
                        name="collections"
                        checked={collections}
                        onClick={handleCollectionToggleValue}
                      ></Checkbox>
                      <img
                        src={`${item.image}`}
                        alt=""
                        className="w-[6rem] h-[4.5rem] rounded-[0.625rem] ml-3"
                      />
                      <div className="ml-4">
                        <p className="font-bold text-base text-[#2A2C33]">
                          {item.title}
                        </p>
                        <p className="font-medium text-xs text-naturalcolor2">
                          {item.name}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center ml-2">
                        <IconWrappedEther className="w-[0.829rem] h-[0.829rem]"></IconWrappedEther>
                        <p className="font-semibold text-sm mb-1 ml-1 text-[#2A2C33]">
                          {item.volumn}
                        </p>
                      </div>
                    </td>
                    <td>
                      <p
                        className={` ml-1 ${
                          item.price24h ? 'text-secondary' : 'text-error'
                        }`}
                      >
                        {item.price24 + '%'}
                      </p>
                    </td>
                    <td>
                      <p
                        className={`ml-1 ${
                          item.price7d ? 'text-secondary' : 'text-error'
                        }`}
                      >
                        {item.price7 + '%'}
                      </p>
                    </td>
                    <td>
                      <div className="flex items-center ml-2">
                        <IconWrappedEther className="w-[0.829rem] h-[0.829rem]"></IconWrappedEther>
                        <p className="font-semibold text-sm mb-1 ml-1 text-[#2A2C33]">
                          {item.FloorPrice}
                        </p>
                      </div>
                    </td>
                    <td>
                      <p className="font-semibold text-sm mb-1 ml-4 text-[#2A2C33]">
                        {item.Owners / 1000 + 'k'}
                      </p>
                    </td>
                    <td>
                      <p className="font-semibold text-sm mb-1 ml-3 text-[#2A2C33]">
                        {item.Items / 1000 + 'k'}
                      </p>
                    </td>
                    <td>
                      <IconMore></IconMore>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </LayoutDashboard>
  );
};

export default RankingPages;
