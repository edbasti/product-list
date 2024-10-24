import styled from "styled-components";

import { Product } from "../types/product";
import ProgressBar from "./ProgressBar";

interface ProductProps {
  product: Product
}

const Container = styled.div`
  width: 183px;
  height: 220px;
  margin: auto;
  border-radius: 12px;
  border: 1px solid #CACACA;
`;

const Text = styled.div`
  font-size: 1.4vh;
  line-height: 1.2vh;
  font-weight: 700;
  text-align: left;
`;

const ProgressText = styled.div`
  font-size: 10px;
  font-weight: 400;
  text-align: left;
`;

const TextContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 8px;
  height: 40%;
`;

const ProductImage = styled.img`
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const BrandImage = styled.img`
  background-size: 100vw 100vh;
  padding: 5px;
`;

const ProductCard = ({product}: ProductProps) =>
  <Container>
    <ProductImage
      src={product.product_image}
    />
    <BrandImage
      src={product.brand_image}
    />
    <TextContainer>
      <Text>{product.brand_name}</Text>
      <Text>{product.product_name}</Text>
      <Text>{product.title}</Text>
      <ProgressBar bgColor={"#7130D5"} progress={product.progress} />
      <ProgressText>{`${product.progress} % Complete`}</ProgressText>
    </TextContainer>
  </Container>;

export default ProductCard;