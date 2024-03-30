"use client";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import {
    FormControl,
    FormField,
    FormItem,
    Form,
    FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AddCandyDialog = ({ addRow , open, setOpen }) => {
    const formSchema = z.object({
        Name: z.string(),
        Candy: z.string(),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Name: "",
            Candy: "",
        },
        mode: "onChange",
    });

    const onSubmit = async (obj) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/candy`, {
            headers: {
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "69420",
                "Access-Control-Allow-Origin": "*"
            },
            method: "POST",
            body: JSON.stringify(obj)
        })
        if (response.status == 200) {
            console.log("It works!");
            // Optimistically update the UI
            addRow(obj);
            setOpen(false);
        }

    };

    return (
        <Dialog open={open}>
            <DialogContent className="sm:max-w-[425px]">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit, (e) =>
                            console.log(e)
                        )}
                    >
                        <DialogHeader>
                            <DialogTitle>Add Candy</DialogTitle>
                            <DialogDescription>
                                Add a Candy here! All you need is a name and the
                                candy name.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <FormLabel className="text-right">
                                    Name
                                </FormLabel>
                                <FormField
                                    control={form.control}
                                    name="Name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="col-span-3"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <FormLabel className="text-right">
                                    Candy
                                </FormLabel>
                                <FormField
                                    control={form.control}
                                    name="Candy"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    className="col-span-3"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <DialogFooter>
                                <Button type="submit">Submit</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default AddCandyDialog;
