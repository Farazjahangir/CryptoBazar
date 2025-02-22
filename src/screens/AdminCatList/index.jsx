import { useEffect, useState } from "react";
import { Box, display, minWidth } from "@mui/system";
import { Avatar, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";

import Button from "../../Components/Button";
import AdminDataGrid from "../../Components/AdminDataGrid";
import Select from "../../Components/Select";
import styles from "./style.module.scss";
import shoe from "../../assets/images/shoe.jpg";
import cloth from "../../assets/images/jacket.png";
import AdminCategoryForm from "./AdminCategoryForm";
import { useUploadFile } from "../../hooks/reactQuery/useUploadFile";
import { useCreateDoc } from "../../hooks/reactQuery/useCreateDoc";
import { queryKeys } from "../../constants/index";
import TextInput from "../../Components/TextInput";
import { useGetCategories } from "../../hooks/reactQuery/useGetCategories";
import { useUpdateDoc } from "../../hooks/reactQuery/useUpdateDoc";

const INITIAL_STATE = {
  name: "",
  image: null,
  description: "",
};
const AdminCatList = () => {
  const [categoryFormShow, setCategoryFormShow] = useState(false);
  const [data, setData] = useState(INITIAL_STATE);
  const [searchText, setSearchText] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const uploadFileMut = useUploadFile();
  const createDocMut = useCreateDoc();
  const updateDocMut = useUpdateDoc()
  const queryClient = useQueryClient();
  const { data: category, isFetching } = useGetCategories({
    params: {
      search: searchText,
    },
  });

  const toggleCategoryForm = () => {
    setCategoryFormShow(!categoryFormShow);
  };

  const onSearch = (e) => {
    setSearchText(e.target.value);
  };

  const renderTableHeader = () => (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box width={300}>
        <TextInput variant="outlined" label="Search" onChange={onSearch} />
      </Box>
      <Box width={180}>
        <Button value="Add Category" onClick={toggleCategoryForm} />
      </Box>
    </Box>
  );

  const onDropFile = async (file) => {
    try {
      const res = await uploadFileMut.mutateAsync({
        file: file[0],
        folderName: "categories",
      });
      setData((prev) => ({
        ...prev,
        image: res,
      }));
    } catch (e) {
      console.log("onDropFile Cat ERRRR", e);
    }
  };

  const handleChange = (value, key) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = async () => {
    try {
      await createDocMut.mutateAsync({
        payload: { ...data, isActive: true },
        collectionName: "Categories",
      });
      toggleCategoryForm();
      toast.success("Category added");
      queryClient.invalidateQueries({
        queryKey: [queryKeys.USE_GET_CATEGORIES],
      });
    } catch (e) {
      console.log("onSubmit Errr", e);
    }
  };

  const onUpdate = async () => {
    try {
      await updateDocMut.mutateAsync({
        payload: data,
        collectionName: "Categories",
        docId: selectedCategoryId
      });
      toggleCategoryForm();
      toast.success("Category updated");
      queryClient.invalidateQueries({
        queryKey: [queryKeys.USE_GET_CATEGORIES],
      });
    } catch (e) {
      console.log("onSubmit Errr", e);
    }
  };

  const onEdit = (data) => {
    setData({
      name: data.name,
      image: data.image,
      description: data?.description ?? "",
    });
    setSelectedCategoryId(data.id);
    setCategoryFormShow(true);
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      display: "flex",
      flex: 1,
      minWidth: 480,
      renderCell: (param) => (
        <Box display="flex" alignItems="center" p={1}>
          <Avatar
            src={param.row.image}
            sx={{ width: 54, height: 54, marginRight: 2 }}
            variant="square"
          />
          <Box>
            <p>{param.row.name}</p>
            <p className={styles.helperText}>
              Choose from wide range of {param.row.name} from popular brands
            </p>
          </Box>
        </Box>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 100,
      sortable: false,
      renderCell: (param) => (
        <Box
          display="flex"
          alignItems="center"
          p={1}
          justifyContent="space-evenly"
          flex={1}
        >
          <Tooltip title="Edit">
            <Edit onClick={() => onEdit(param.row)} />
          </Tooltip>
          <Tooltip title="Delete">
            <Delete />
          </Tooltip>
        </Box>
      ),
    },
  ];

  const DUMMY_DATA = [
    {
      id: 1,
      name: "Footwear",
      totalPrd: 100,
      totalSubCat: 2,
      image: shoe,
      startPrice: 3,
    },
    {
      id: 2,
      name: "Clothing",
      totalPrd: 1,
      totalSubCat: 4,
      image: cloth,
      startPrice: 3,
    },
  ];

  useEffect(() => {
    if (!categoryFormShow) {
      setData(INITIAL_STATE);
      setSelectedCategoryId('')
    }
  },[categoryFormShow])

  return (
    <div className={styles.container}>
      <AdminCategoryForm
        open={categoryFormShow}
        onClose={toggleCategoryForm}
        data={data}
        onDropFile={onDropFile}
        handleChange={handleChange}
        imageLoading={uploadFileMut.isPending}
        loading={createDocMut.isPending || updateDocMut.isPending}
        onSubmit={onSubmit}
        categoryId={selectedCategoryId}
        onUpdate={onUpdate}
      />
      <h2>Filters</h2>
      <Box maxWidth="800px" mb={4} mt={3}>
        <Box display="flex" mt={1} width="100%">
          <Box flex={1} mr={1}>
            <Select
              label="Select Category"
              menus={[
                {
                  name: "Shoes",
                  value: "shoe",
                },
              ]}
            />
          </Box>
          <Box flex={1}>
            <Select
              label="Select Rating"
              menus={[
                {
                  name: "5",
                  value: "5",
                },
              ]}
            />
          </Box>
        </Box>
        <p className={styles.clearText}>Clear filter</p>
      </Box>
      <AdminDataGrid
        columns={columns}
        rows={category?.data || []}
        renderHeader={renderTableHeader}
        loading={isFetching}
      />
    </div>
  );
};

export default AdminCatList;
