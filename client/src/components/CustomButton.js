import React from "react";

import { Button } from "antd";

const CustomButton = ({ onClick, loading, disabled }) => {
    return (

        <div className="mt-4 d-flex align-items-center justify-content-end">
            <Button
                type="primary"
                className="button"
                onClick={onClick}
                loading={loading}
                disabled={disabled}
            >
                Check
            </Button>
        </div>
    )
}

export default CustomButton