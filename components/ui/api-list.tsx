"use client";

import { Fragment } from "react";
import { useParams } from "next/navigation";

import { useOrigin } from "@/hooks/use-origin";
import { ApiAlert } from "@/components/ui/api-alert";

interface ApiListProps {
  enttityName: string;
  entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({
  enttityName,
  entityIdName,
}) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;
  return (
    <Fragment>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${enttityName}`}
      />

      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${enttityName}/{${entityIdName}}`}
      />

      <ApiAlert
        title="POST"
        variant="admin"
        description={`${baseUrl}/${enttityName}/{${entityIdName}}`}
      />

      <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${enttityName}/{${entityIdName}}`}
      />

      <ApiAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${enttityName}/{${entityIdName}}`}
      />
    </Fragment>
  );
};
