import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link";

export default function DeletePost({post}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    className="bg-red-400 hover:bg-red-500 text-white py-2 px-4 border border-gray-400 rounded shadow">
                    Delete
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Delete post {post.title}</DialogTitle>
                    <DialogDescription>
                        Are you sure to delete this post?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                        <Link href={`/posts/${post.id}/delete`}
                              className="inline-flex items-center font-medium text-red-600 hover:text-red-800">
                            Delete
                        </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
