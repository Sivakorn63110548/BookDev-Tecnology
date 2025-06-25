"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";

import { useEffect, useState } from "react";
import { CameraIcon } from "./_components/icons";
import { SocialAccounts } from "./_components/social-accounts";
import axios from "axios";
import { useUser } from "@/contexts/UserContext";

export default function Page() {
  const [data, setData] = useState({
    full_name: "Danish Heilium",
    profile_img: "/images/user/user-03.png",
    coverPhoto: "/images/cover/cover-01.png",
    job_title: "Ui/Ux Designer",
    posts: 259,
    followers: "129K",
    following: "2K",
    about_me:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut.",
    facebook_url: "",
    github_url: "",
    linkedin_url: "",
    instagram_url: "",
    web_other_url: "",
  });

  const { user } = useUser();

  useEffect(() => {
    async function fetchUser() {
      try {
        if (!user?.id) return;

        const response = await axios.post("http://127.0.0.1:8000/get_user_detail", {
          id: user.id,
        });

        setData({
          full_name: response.data.full_name || "No Name",
          profile_img: response.data.profile_img || "/images/user/user-03.png",
          coverPhoto: response.data.coverPhoto || "/images/cover/cover-01.png",
          job_title: response.data.job_title || "No Title",
          posts: response.data.posts ?? 0,
          followers: response.data.followers || "0",
          following: response.data.following || "0",
          about_me: response.data.about_me || "No description",
          facebook_url: response.data.facebook_url || "",
          github_url: response.data.github_url || "",
          linkedin_url: response.data.linkedin_url || "",
          instagram_url: response.data.instagram_url || "",
          web_other_url: response.data.web_other_url || "",
        });
        
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
    fetchUser();
  }, [user?.id]);

  const handleChange = (e: any) => {
    if (e.target.name === "profilePhoto") {
      const file = e.target?.files[0];

      setData({
        ...data,
        profile_img: file && URL.createObjectURL(file),
      });
    } else if (e.target.name === "coverPhoto") {
      const file = e.target?.files[0];

      setData({
        ...data,
        coverPhoto: file && URL.createObjectURL(file),
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="mx-auto w-full max-w-[970px]">
      <Breadcrumb pageName="Profile" />

      <div className="overflow-hidden rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="relative z-20 h-35 md:h-65">
          <Image
            src={data.coverPhoto}
            alt="profile cover"
            className="h-full w-full rounded-tl-[10px] rounded-tr-[10px] object-cover object-center"
            width={970}
            height={260}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
          <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
            <label
              htmlFor="coverPhoto"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-[15px] py-[5px] text-body-sm font-medium text-white hover:bg-opacity-90"
            >
              <input
                type="file"
                name="coverPhoto"
                id="coverPhoto"
                className="sr-only"
                onChange={handleChange}
                accept="image/png, image/jpg, image/jpeg"
              />

              <CameraIcon />

              <span>Edit</span>
            </label>
          </div>
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-[176px] sm:p-3">
            <div className="relative drop-shadow-2">
              {data.profile_img && (
                <>
                  <Image
                    src={data.profile_img}
                    width={160}
                    height={160}
                    className="overflow-hidden rounded-full"
                    alt="profile"
                  />

                  <label
                    htmlFor="profilePhoto"
                    className="absolute bottom-0 right-0 flex size-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
                  >
                    <CameraIcon />

                    <input
                      type="file"
                      name="profilePhoto"
                      id="profilePhoto"
                      className="sr-only"
                      onChange={handleChange}
                      accept="image/png, image/jpg, image/jpeg"
                    />
                  </label>
                </>
              )}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1 text-heading-6 font-bold text-dark dark:text-white">
              {data.full_name}
            </h3>
            <p className="font-medium">{data.job_title}</p>
            <div className="mx-auto mb-5.5 mt-5 grid max-w-[370px] grid-cols-3 rounded-[5px] border border-stroke py-[9px] shadow-1 dark:border-dark-3 dark:bg-dark-2 dark:shadow-card">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-dark-3 xsm:flex-row">
                <span className="font-medium text-dark dark:text-white">{data.posts}</span>
                <span className="text-body-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-dark-3 xsm:flex-row">
                <span className="font-medium text-dark dark:text-white">{data.followers}</span>
                <span className="text-body-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                <span className="font-medium text-dark dark:text-white">{data.following}</span>
                <span className="text-body-sm-sm">Following</span>
              </div>
            </div>

            <div className="mx-auto max-w-[720px]">
              <h4 className="font-medium text-dark dark:text-white">About Me</h4>
              <p className="mt-4">{data.about_me}</p>
            </div>

            <SocialAccounts
              facebook={data.facebook_url}
              github={data.github_url}
              linkedin={data.linkedin_url}
              instagram={data.instagram_url}
              website={data.web_other_url}
            />
          </div>
        </div>
      </div>
    </div>
  );
}