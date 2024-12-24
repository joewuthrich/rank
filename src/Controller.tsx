import { useState } from "react";
import { BrandedLayout } from "./ui/layouts/BrandedLayout";
import { ListInput } from "./ui/blocks/ListInput";

export function Controller() {
  const [choosing, setChoosing] = useState(false);

  return <BrandedLayout>{!choosing && <ListInput />}</BrandedLayout>;
}
