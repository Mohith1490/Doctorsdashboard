"use react"
import { DoctorsformType } from "@/type/schema"
import { useForm } from "react-hook-form"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"
import { CirclePlus } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import useAddDoctor from "@/data/addDoctors/add-doctor"
import { useState } from "react"



export default function AddDoctorForm() {
    const [isDialogOpen, setisDialogOpen] = useState<boolean>(false);
    const mutation = useAddDoctor();
    const form = useForm({
        defaultValues: {
            name: "",
            phonenumber: 0,
            email: "",
            password: "",
            specialization: "",
            bio: ""
        }
    })
    function onsubmit(values: DoctorsformType) {
        // console.log(values)
        mutation.mutate(values, {
            onSuccess: () => {
                setisDialogOpen(false);
                form.reset();
            }
        });
    }
    return (
        <>
            <Dialog open={isDialogOpen} onOpenChange={(open) => {
                setisDialogOpen(open);
                form.reset()
            }}>
                <DialogTrigger>
                    <Button>
                        <CirclePlus />
                        Add Doctor
                    </Button>
                </DialogTrigger>
                <DialogContent className="w-full max-w-3xl h-screen overflow-y-scroll ">
                    <DialogHeader className="font-bold text-xl" >
                        Add Doctor
                        <DialogTitle>Add Doctor with below required fields</DialogTitle>
                    </DialogHeader>
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onsubmit)} className="space-y-6 space-x-3 grid grid-cols-1 md:grid-cols-2 mt-5">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name </FormLabel>
                                        <FormControl>
                                            <Input placeholder="name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email </FormLabel>
                                        <FormControl>
                                            <Input placeholder="email" type="email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password </FormLabel>
                                        <FormControl>
                                            <Input placeholder="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phonenumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number </FormLabel>
                                        <FormControl>
                                            <Input placeholder="phone number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="specialization"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Specialization</FormLabel>
                                        <FormControl>
                                            <Input placeholder="specialization" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="bio"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Bio </FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Bio" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="md:col-start-2"  >
                                Submit
                            </Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    )
}