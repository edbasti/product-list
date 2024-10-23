import React, { useState, useEffect, useCallback } from 'react';
import styled from "styled-components";

import ProductCard from "./ProductCard";
import { Product } from "../types/product";

const CategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px 20px 20px;
`;

const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-row-gap: 40px;
    margin-bottom: 40px;
`;

const ProductCategory = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    text-align: left;
`;

const SeeAllLink = styled.div`
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    color: #7130D5;
`;

const ProductList = () => {
    const [groupedData, setGroupdData] = useState<any>();
    const [withError, setWithError] = useState<boolean>(false);

    function groupBy<T>(collection:T[],key: keyof T) {
      const groupedResult =  collection.reduce((previous,current)=>{
   
      if(!previous[current[key]]){
        previous[current[key]] = [] as T[];
       }
   
      previous[current[key]].push(current);
             return previous;
      },{} as any); // tried to figure this out, help!!!!!
        return groupedResult
    }

    const getData = useCallback(async () => {
        try{
            const response =  await import('../data/data.json')
            const data = response.default
            const res = groupBy(data, "lane");

            setGroupdData(res);
            setWithError(false);
        }catch(err){
            setGroupdData(null);
            setWithError(true);
          return err
        }
    }, []);

    useEffect(()=> {
        getData();
    }, [getData])


    return (
    <>
        {!withError && groupedData ?
            (
                <div style={{margin: '20px 5% 20px 5%'}}>
                    <CategoryContainer>
                        <ProductCategory>For You</ProductCategory>
                        <SeeAllLink>See All</SeeAllLink>
                    </CategoryContainer>
                    <ProductContainer>
                        {groupedData.for_you.map((product: Product, idx: number) => (
                            <ProductCard product={product} />
                        ))}
                    </ProductContainer>
                    <CategoryContainer>
                        <ProductCategory>Hot Products</ProductCategory>
                        <SeeAllLink>See All</SeeAllLink>
                    </CategoryContainer>
                    <ProductContainer>
                        {groupedData.hot.map((product: Product, idx: number) => (
                            <ProductCard product={product} />
                        ))}
                    </ProductContainer>
                    <CategoryContainer>
                        <ProductCategory>Featured</ProductCategory>
                        <SeeAllLink>See All</SeeAllLink>
                    </CategoryContainer>
                    <ProductContainer>
                        {groupedData?.features.map((product: Product, idx: number) => (
                            <ProductCard product={product} />
                        ))}
                    </ProductContainer>
                    <ProductContainer>
                        {groupedData.null.map((product: Product, idx: number) => (
                            <ProductCard product={product} />
                        ))}
                    </ProductContainer>
                </div>
            ) :
            (
                <h1>With Error</h1>
                
            )
            }
    </>
)}

export default ProductList;