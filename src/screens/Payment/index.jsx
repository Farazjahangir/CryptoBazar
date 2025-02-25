import { Divider, Grid, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { ethers, parseUnits } from "ethers";
import { useNavigate } from "react-router-dom";

import TextInput from "../../Components/TextInput";
import { calculateTotal } from "../../utils/globalHelpers";
import Button from "../../Components/Button";
import { useCreateDoc } from "../../hooks/reactQuery/useCreateDoc";
import { SCREEN_PATHS } from "../../constants";
import { emptyCart } from "../../redux/cartSlice";

const Payment = () => {
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);
  const createDocMut = useCreateDoc();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [orderState, setOrderState] = useState({
    email: user.email,
    address: user.address,
    contact: user.contact,
    country: "Pakistan",
  });

  const isWalletConnected = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      console.log("MetaMask not installed");
    }
  };

  const handleChange = (value, key) => {
    setOrderState({ ...orderState, [key]: value });
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        console.error("MetaMask is not installed");
        return;
      }

      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.BrowserProvider(window.ethereum); // For ethers v6
      const signer = await provider.getSigner();
      sendTransaction();
      console.log("Connected Wallet Address:", await signer.getAddress());
    } catch (error) {
      console.error("Wallet Connection Error:", error);
    }
  };

  const saveOrder = async () => {
    try {
      const payload = {
        ...orderState,
        order: cart.reduce((acc, item) => {
          const payload = {
            product: item.item.id,
            quantity: item.quantity,
          };
          acc.push(payload);
          return acc;
        }, []),
        user: user.uid,
        totalAmount: calculateTotal(cart),
      };
      console.log("payload", payload);
      await createDocMut.mutateAsync({
        payload: { ...payload, isActive: true },
        collectionName: "Orders",
      });
      toast.success("Your order has been placed");
      navigate(SCREEN_PATHS.HOME);
      dispatch(emptyCart());
    } catch (e) {
      console.log("ERr", e);
    }
  };

  const sendTransaction = async () => {
    try {
      if (!window.ethereum) {
        console.error("MetaMask is not installed");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const balance = await provider.getBalance(await signer.getAddress());

      const amount = calculateTotal(cart).toString();

      const sendAmount = ethers.parseEther(amount);
      if (balance < sendAmount) {
        throw new Error("Insufficient funds for transaction!");
      }
      const tx = await signer.sendTransaction({
        to: import.meta.env.VITE_WALLET_ADDRESS, // Receiver ka address likho
        value: sendAmount,
      });

      console.log("Transaction Sent! Tx Hash:");
      const c = await tx.wait(); // Wait for transaction confirmation
      saveOrder(tx.hash);
    } catch (error) {
      console.log("Transaction Error:", error.message);
    }
  };

  return (
    <Box mt="90px" padding={3}>
      <Typography textAlign="center" variant="h4" color="#808080">
        Checkout
      </Typography>
      <Grid container spacing={4} mt={3}>
        <Grid item xs={12} lg={6}>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextInput
              variant="outlined"
              label="Country"
              value="Pakistan"
              disabled
            />
            <TextInput
              variant="outlined"
              label="Address"
              onChange={(e) => handleChange(e.target.value, "address")}
              value={orderState.address}
            />
            <TextInput
              variant="outlined"
              label="City"
              onChange={(e) => handleChange(e.target.value, "city")}
              value={orderState.city}
            />
            <TextInput
              variant="outlined"
              label="Phone"
              onChange={(e) => handleChange(e.target.value, "contact")}
              value={orderState.contact}
            />
            <TextInput
              variant="outlined"
              label="Email"
              onChange={(e) => handleChange(e.target.value, "email")}
              value={orderState.email}
            />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box
            padding={3}
            borderRadius={2}
            sx={{ border: "1px solid #dfe4e5" }}
          >
            <Typography fontWeight="bold">Your Order</Typography>
            <Box mt={6}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography>Product</Typography>
                <Typography>Total</Typography>
              </Box>
              <Divider sx={{ marginTop: 2 }} />
              <Box
                maxHeight={200}
                sx={{ overflowY: "auto", scrollbarWidth: 'none' }}
              >
                {cart.map((item) => (
                  <>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      my={2}
                    >
                      <Typography>
                        {item.item.name}x{item.quantity}
                      </Typography>
                      <Typography>
                        {(item.item.price * item.quantity).toFixed(3)}
                      </Typography>
                    </Box>
                    <Divider />
                  </>
                ))}
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                my={2}
              >
                <Typography>Total</Typography>
                <Typography>{calculateTotal(cart)}</Typography>
              </Box>
            </Box>
            <Box mt={4} display="flex" justifyContent="flex-end">
              <Box width="100%" maxWidth={200}>
                {isWalletConnected ? (
                  <Button
                    value="Place order"
                    onClick={sendTransaction}
                    loading={createDocMut.isPending}
                  />
                ) : (
                  <Button value="Connect your wallet" onClick={connectWallet} />
                )}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Payment;
